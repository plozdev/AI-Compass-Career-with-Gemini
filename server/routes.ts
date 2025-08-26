import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { careerAssessmentSchema } from "@shared/schema";
import { getCareerAdvice, getMarketAnalysis } from "./services/gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Career advice endpoint
  app.post("/api/career-advice", async (req, res) => {
    try {
      const { major, skills, workEnvironment, motivation, coreInterest, problemSolving, personality } = careerAssessmentSchema.parse(req.body);
      
      const advice = await getCareerAdvice(major, skills, workEnvironment, motivation, coreInterest, problemSolving, personality);
      
      res.json(advice);
    } catch (error) {
      console.error("Error in career advice endpoint:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid input data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: error instanceof Error ? error.message : "Failed to generate career advice" 
        });
      }
    }
  });

  // Market analysis endpoint
  app.post("/api/market-analysis", async (req, res) => {
    try {
      const { careerPath } = z.object({ 
        careerPath: z.string().min(1, "Career path is required") 
      }).parse(req.body);
      
      const analysis = await getMarketAnalysis(careerPath);
      
      res.json(analysis);
    } catch (error) {
      console.error("Error in market analysis endpoint:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid input data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: error instanceof Error ? error.message : "Failed to generate market analysis" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
