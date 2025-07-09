import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import nodemailer from "nodemailer";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumePDF from "./resume-pdf";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMAIL_TO = process.env.CONTACT_EMAIL || "rautanhemu@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "no-reply@example.com";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);

      // Send email notification
      try {
        await transporter.sendMail({
          from: EMAIL_FROM,
          to: EMAIL_TO,
          replyTo: contact.email, // Allow direct reply to the user
          subject: `New Contact Form Submission: ${contact.subject}`,
          text: `You have a new contact form submission:\n\nName: ${contact.firstName} ${contact.lastName}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nMessage: ${contact.message}`,
          html: `<h2>New Contact Form Submission</h2><p><b>Name:</b> ${contact.firstName} ${contact.lastName}</p><p><b>Email:</b> ${contact.email}</p><p><b>Subject:</b> ${contact.subject}</p><p><b>Message:</b> ${contact.message}</p>`
        });
      } catch (emailError) {
        console.error("Failed to send contact email:", emailError);
      }

      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Resume download endpoint - serves your actual resume file
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(__dirname, 'public', 'resume', 'Hemant_Singh_Resume.pdf');
      
      // Check if the resume file exists
      if (!fs.existsSync(resumePath)) {
        console.log('Resume file not found, serving generated PDF as fallback...');
        
        // Fallback to generated PDF if file doesn't exist
        renderToBuffer(React.createElement(ResumePDF))
          .then(pdfBuffer => {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="Hemant_Singh_Resume.pdf"');
            res.setHeader('Content-Length', pdfBuffer.length);
            res.send(pdfBuffer);
          })
          .catch(error => {
            console.error('Error generating fallback PDF:', error);
            res.status(500).json({ 
              success: false, 
              message: "Resume file not found and fallback generation failed" 
            });
          });
        return;
      }
      
      console.log('Serving actual resume file from:', resumePath);
      
      // Set headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Hemant_Singh_Resume.pdf"');
      
      // Send the file
      res.sendFile(resumePath);
      
    } catch (error) {
      console.error('Error serving resume file:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to serve resume file" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
