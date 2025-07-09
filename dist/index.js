// server/index.ts
import "dotenv/config";
import express2 from "express";
import path4 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
import { pgTable, text, serial, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
}, (table) => ({
  firstNameIdx: index("first_name_idx").on(table.firstName),
  emailIdx: index("email_idx").on(table.email)
}));
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});

// server/storage.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
console.log("Setting up database connection with URL:", process.env.DATABASE_URL ? "URL exists" : "URL missing");
var pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
pool.on("error", (err) => {
  console.error("Database pool error:", err);
});
var db = drizzle(pool);
var DrizzleStorage = class {
  async createContact(insertContact) {
    try {
      console.log("Attempting to create contact in database:", insertContact);
      const [contact] = await db.insert(contacts).values(insertContact).returning();
      console.log("Contact created successfully:", contact);
      return contact;
    } catch (error) {
      console.error("Error creating contact in database:", error);
      throw error;
    }
  }
  async getContacts() {
    try {
      return await db.select().from(contacts).orderBy(contacts.createdAt.desc());
    } catch (error) {
      console.error("Error getting contacts from database:", error);
      throw error;
    }
  }
  // User methods can be implemented similarly if needed
  async getUser(id) {
    return void 0;
  }
  async getUserByUsername(username) {
    return void 0;
  }
  async createUser(user) {
    return void 0;
  }
};
var storage = new DrizzleStorage();

// server/routes.ts
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import nodemailer from "nodemailer";
import React2 from "react";
import { renderToBuffer } from "@react-pdf/renderer";

// server/resume-pdf.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfA.ttf", fontWeight: "normal" },
    { src: "https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfB.ttf", fontWeight: "bold" }
  ]
});
var styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Helvetica"
  },
  header: {
    textAlign: "center",
    marginBottom: 30,
    borderBottom: "3px solid #F59E0B",
    paddingBottom: 20
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8
  },
  title: {
    fontSize: 16,
    color: "#F59E0B",
    fontWeight: "bold",
    marginBottom: 12
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    fontSize: 10,
    color: "#6b7280",
    gap: 20
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    borderBottom: "2px solid #F59E0B",
    paddingBottom: 4,
    marginBottom: 12
  },
  experienceItem: {
    marginBottom: 16
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937"
  },
  position: {
    fontSize: 11,
    color: "#F59E0B",
    fontWeight: "bold"
  },
  date: {
    fontSize: 10,
    color: "#6b7280"
  },
  description: {
    fontSize: 10,
    color: "#4b5563",
    marginTop: 6,
    lineHeight: 1.4
  },
  projectItem: {
    marginBottom: 16
  },
  projectHeader: {
    marginBottom: 6
  },
  projectName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937"
  },
  techStack: {
    fontSize: 10,
    color: "#F59E0B",
    fontWeight: "bold"
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15
  },
  skillCategory: {
    width: "48%",
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 4,
    borderLeft: "4px solid #F59E0B"
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 6
  },
  skillList: {
    fontSize: 9,
    color: "#4b5563"
  },
  skillItem: {
    marginBottom: 2
  },
  educationItem: {
    marginBottom: 16
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6
  },
  degree: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937"
  },
  university: {
    fontSize: 11,
    color: "#F59E0B",
    fontWeight: "bold"
  },
  summary: {
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.5,
    marginBottom: 20
  },
  certifications: {
    fontSize: 10,
    color: "#4b5563",
    lineHeight: 1.4
  }
});
var ResumePDF = () => /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Page, { size: "A4", style: styles.page }, /* @__PURE__ */ React.createElement(View, { style: styles.header }, /* @__PURE__ */ React.createElement(Text, { style: styles.name }, "HEMANT SINGH"), /* @__PURE__ */ React.createElement(Text, { style: styles.title }, "Full Stack Software Developer"), /* @__PURE__ */ React.createElement(View, { style: styles.contactInfo }, /* @__PURE__ */ React.createElement(View, { style: styles.contactItem }, /* @__PURE__ */ React.createElement(Text, null, "\u{1F4E7} rautanhemu@gmail.com")), /* @__PURE__ */ React.createElement(View, { style: styles.contactItem }, /* @__PURE__ */ React.createElement(Text, null, "\u{1F4F1} +91 7017862900")), /* @__PURE__ */ React.createElement(View, { style: styles.contactItem }, /* @__PURE__ */ React.createElement(Text, null, "\u{1F4CD} Haridwar, Uttarakhand, India")), /* @__PURE__ */ React.createElement(View, { style: styles.contactItem }, /* @__PURE__ */ React.createElement(Text, null, "\u{1F517} linkedin.com/in/hemant-singh-dev")))), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "PROFESSIONAL SUMMARY"), /* @__PURE__ */ React.createElement(Text, { style: styles.summary }, "Passionate Full Stack Developer with expertise in modern web technologies and a strong foundation in computer science. Experienced in building scalable applications using React, Node.js, and cloud technologies. Committed to writing clean, maintainable code and staying updated with industry best practices.")), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "EXPERIENCE"), /* @__PURE__ */ React.createElement(View, { style: styles.experienceItem }, /* @__PURE__ */ React.createElement(View, { style: styles.experienceHeader }, /* @__PURE__ */ React.createElement(View, null, /* @__PURE__ */ React.createElement(Text, { style: styles.company }, "Farmicon"), /* @__PURE__ */ React.createElement(Text, { style: styles.position }, "Software Development Intern")), /* @__PURE__ */ React.createElement(Text, { style: styles.date }, "June 2024 - August 2024")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Developed and maintained web applications using React.js and Node.js", "\n", "\u2022 Collaborated with cross-functional teams to deliver high-quality software solutions", "\n", "\u2022 Implemented responsive design principles and ensured cross-browser compatibility", "\n", "\u2022 Participated in code reviews and contributed to team knowledge sharing")), /* @__PURE__ */ React.createElement(View, { style: styles.experienceItem }, /* @__PURE__ */ React.createElement(View, { style: styles.experienceHeader }, /* @__PURE__ */ React.createElement(View, null, /* @__PURE__ */ React.createElement(Text, { style: styles.company }, "Creomind Innovations"), /* @__PURE__ */ React.createElement(Text, { style: styles.position }, "Frontend Developer Intern")), /* @__PURE__ */ React.createElement(Text, { style: styles.date }, "January 2024 - May 2024")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Built user-friendly interfaces using React.js and modern CSS frameworks", "\n", "\u2022 Optimized application performance and improved user experience", "\n", "\u2022 Worked with REST APIs and integrated third-party services", "\n", "\u2022 Assisted in testing and debugging of frontend applications"))), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "PROJECTS"), /* @__PURE__ */ React.createElement(View, { style: styles.projectItem }, /* @__PURE__ */ React.createElement(View, { style: styles.projectHeader }, /* @__PURE__ */ React.createElement(Text, { style: styles.projectName }, "Flip-Shop E-Commerce Platform"), /* @__PURE__ */ React.createElement(Text, { style: styles.techStack }, "React.js \u2022 Node.js \u2022 MongoDB \u2022 Express.js")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Developed a full-stack e-commerce platform with user authentication, product management, and payment integration", "\n", "\u2022 Implemented responsive design and optimized for mobile devices", "\n", "\u2022 Integrated payment gateway and order management system", "\n", "\u2022 Deployed on cloud platform with CI/CD pipeline")), /* @__PURE__ */ React.createElement(View, { style: styles.projectItem }, /* @__PURE__ */ React.createElement(View, { style: styles.projectHeader }, /* @__PURE__ */ React.createElement(Text, { style: styles.projectName }, "Abhaya News Portal"), /* @__PURE__ */ React.createElement(Text, { style: styles.techStack }, "React.js \u2022 Node.js \u2022 MySQL \u2022 REST API")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Built a news aggregation platform with real-time updates and user preferences", "\n", "\u2022 Implemented search functionality and category filtering", "\n", "\u2022 Created admin panel for content management", "\n", "\u2022 Optimized database queries for better performance")), /* @__PURE__ */ React.createElement(View, { style: styles.projectItem }, /* @__PURE__ */ React.createElement(View, { style: styles.projectHeader }, /* @__PURE__ */ React.createElement(Text, { style: styles.projectName }, "Real-Time Analytics Dashboard"), /* @__PURE__ */ React.createElement(Text, { style: styles.techStack }, "React.js \u2022 Node.js \u2022 Socket.io \u2022 Chart.js")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Developed a real-time data visualization dashboard with live updates", "\n", "\u2022 Implemented WebSocket connections for real-time data streaming", "\n", "\u2022 Created interactive charts and graphs for data analysis", "\n", "\u2022 Built responsive design for various screen sizes"))), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "SKILLS"), /* @__PURE__ */ React.createElement(View, { style: styles.skillsGrid }, /* @__PURE__ */ React.createElement(View, { style: styles.skillCategory }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillCategoryTitle }, "Frontend Development"), /* @__PURE__ */ React.createElement(View, { style: styles.skillList }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 React.js & React Native"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 JavaScript (ES6+) & TypeScript"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 HTML5 & CSS3"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Tailwind CSS & Bootstrap"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Redux & Context API"))), /* @__PURE__ */ React.createElement(View, { style: styles.skillCategory }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillCategoryTitle }, "Backend Development"), /* @__PURE__ */ React.createElement(View, { style: styles.skillList }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Node.js & Express.js"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Python & Django"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Java & Spring Boot"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 RESTful APIs"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 GraphQL"))), /* @__PURE__ */ React.createElement(View, { style: styles.skillCategory }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillCategoryTitle }, "Database & Cloud"), /* @__PURE__ */ React.createElement(View, { style: styles.skillList }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 MongoDB & MySQL"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 PostgreSQL & Redis"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 AWS & Google Cloud"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Docker & Kubernetes"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Firebase"))), /* @__PURE__ */ React.createElement(View, { style: styles.skillCategory }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillCategoryTitle }, "Tools & Technologies"), /* @__PURE__ */ React.createElement(View, { style: styles.skillList }, /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Git & GitHub"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 VS Code & IntelliJ"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Postman & Insomnia"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Jest & Testing Library"), /* @__PURE__ */ React.createElement(Text, { style: styles.skillItem }, "\u2022 Webpack & Vite"))))), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "EDUCATION"), /* @__PURE__ */ React.createElement(View, { style: styles.educationItem }, /* @__PURE__ */ React.createElement(View, { style: styles.educationHeader }, /* @__PURE__ */ React.createElement(View, null, /* @__PURE__ */ React.createElement(Text, { style: styles.degree }, "Bachelor of Technology in Computer Science Engineering"), /* @__PURE__ */ React.createElement(Text, { style: styles.university }, "University Name")), /* @__PURE__ */ React.createElement(Text, { style: styles.date }, "Expected 2025")), /* @__PURE__ */ React.createElement(Text, { style: styles.description }, "\u2022 Relevant Coursework: Data Structures, Algorithms, Database Management, Web Development, Software Engineering", "\n", "\u2022 GPA: 8.5/10", "\n", "\u2022 Active member of coding clubs and technical societies"))), /* @__PURE__ */ React.createElement(View, { style: styles.section }, /* @__PURE__ */ React.createElement(Text, { style: styles.sectionTitle }, "CERTIFICATIONS & ACHIEVEMENTS"), /* @__PURE__ */ React.createElement(Text, { style: styles.certifications }, "\u2022 AWS Certified Cloud Practitioner", "\n", "\u2022 MongoDB Database Administrator", "\n", "\u2022 Google Cloud Platform Fundamentals", "\n", "\u2022 Winner of University Hackathon 2024", "\n", "\u2022 Active contributor to open-source projects on GitHub"))));
var resume_pdf_default = ResumePDF;

// server/routes.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var EMAIL_TO = process.env.CONTACT_EMAIL || "rautanhemu@gmail.com";
var EMAIL_FROM = process.env.EMAIL_FROM || "no-reply@example.com";
var SMTP_HOST = process.env.SMTP_HOST;
var SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
var SMTP_USER = process.env.SMTP_USER;
var SMTP_PASS = process.env.SMTP_PASS;
var transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      try {
        await transporter.sendMail({
          from: EMAIL_FROM,
          to: EMAIL_TO,
          replyTo: contact.email,
          // Allow direct reply to the user
          subject: `New Contact Form Submission: ${contact.subject}`,
          text: `You have a new contact form submission:

Name: ${contact.firstName} ${contact.lastName}
Email: ${contact.email}
Subject: ${contact.subject}
Message: ${contact.message}`,
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
  app2.get("/api/contacts", async (req, res) => {
    try {
      const contacts2 = await storage.getContacts();
      res.json(contacts2);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch contacts"
      });
    }
  });
  app2.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(__dirname, "public", "resume", "Hemant_Singh_Resume.pdf");
      if (!fs.existsSync(resumePath)) {
        console.log("Resume file not found, serving generated PDF as fallback...");
        renderToBuffer(React2.createElement(resume_pdf_default)).then((pdfBuffer) => {
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", 'attachment; filename="Hemant_Singh_Resume.pdf"');
          res.setHeader("Content-Length", pdfBuffer.length);
          res.send(pdfBuffer);
        }).catch((error) => {
          console.error("Error generating fallback PDF:", error);
          res.status(500).json({
            success: false,
            message: "Resume file not found and fallback generation failed"
          });
        });
        return;
      }
      console.log("Serving actual resume file from:", resumePath);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Hemant_Singh_Resume.pdf"');
      res.sendFile(resumePath);
    } catch (error) {
      console.error("Error serving resume file:", error);
      res.status(500).json({
        success: false,
        message: "Failed to serve resume file"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = path4.dirname(__filename2);
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use("/public", express2.static(path4.join(__dirname2, "public")));
app.use((req, res, next) => {
  const start = Date.now();
  const path5 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path5.startsWith("/api")) {
      let logLine = `${req.method} ${path5} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "127.0.0.1"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
