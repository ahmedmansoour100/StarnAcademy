import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEnrollmentSchema, insertContactSchema } from "@shared/schema";
import { appendEnrollmentToSheet } from "./googleSheets";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/enrollments", async (req, res) => {
    try {
      const validatedData = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createEnrollment(validatedData);
      
      // Send to Google Sheets
      await appendEnrollmentToSheet({
        childName: validatedData.childName,
        childAge: validatedData.childAge,
        schoolType: validatedData.schoolType,
        location: validatedData.location,
        parentName: validatedData.parentName,
        parentPhone: validatedData.parentPhone,
        course: validatedData.course,
        preferredSchedule: validatedData.preferredSchedule
      });
      
      res.status(201).json(enrollment);
    } catch (error) {
      console.error("Error creating enrollment:", error);
      res.status(400).json({ error: "Invalid enrollment data" });
    }
  });

  app.get("/api/enrollments", async (req, res) => {
    try {
      const enrollments = await storage.getEnrollments();
      res.json(enrollments);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      res.status(500).json({ error: "Failed to fetch enrollments" });
    }
  });

  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  return httpServer;
}
