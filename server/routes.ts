import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
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

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      // In a real application, you would serve an actual PDF file
      // For now, we'll return a response indicating the download would happen
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Hemant_Singh_Resume.pdf"');
      
      // Create a simple text response simulating PDF download
      const resumeContent = `
HEMANT SINGH - SOFTWARE DEVELOPER
Email: rautanhemu@gmail.com
Phone: +91 7017862900
Location: Haridwar, Uttarakhand, India

EDUCATION
Bachelor of Technology in Computer Science Engineering
Expected Graduation: 2025

SKILLS
- Frontend: React.js, JavaScript/TypeScript, HTML/CSS
- Backend: Node.js, Python, Java
- Database: MongoDB, MySQL
- Tools: Git/GitHub, Docker, AWS

EXPERIENCE
- Software Development Intern at Tech Innovations Ltd. (June 2024 - August 2024)
- Frontend Developer Intern at Digital Solutions Co. (January 2024 - May 2024)
- Research Assistant at University Research Lab (September 2023 - December 2023)

PROJECTS
- E-Commerce Platform (React, Node.js, MongoDB)
- Task Management App (React Native, Firebase)
- AI Chatbot Platform (Python, TensorFlow)
- Blockchain Voting System (Solidity, Web3.js)
      `;
      
      res.send(resumeContent);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to download resume" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
