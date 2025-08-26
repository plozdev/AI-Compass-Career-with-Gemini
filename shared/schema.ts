import { z } from "zod";

export const careerAssessmentSchema = z.object({
  major: z.string().min(1, "Major is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required").max(3, "Maximum 3 skills allowed"),
  workEnvironment: z.string().min(1, "Work environment preference is required"),
  motivation: z.string().min(1, "Career motivation is required"),
  coreInterest: z.string().min(1, "Core interest is required"),
  problemSolving: z.string().min(1, "Problem solving preference is required"),
  personality: z.string().min(1, "Personality type is required"),
});

export const careerAdviceSchema = z.object({
  careerPath: z.string(),
  reasons: z.array(z.string()),
  suggestedProject: z.string(),
});

export const marketAnalysisSchema = z.object({
  growthPotential: z.string(),
  requiredSkills: z.array(z.string()),
  salaryRange: z.object({
    junior: z.string(),
    midLevel: z.string(),
    senior: z.string(),
    techLead: z.string(),
  }),
  topCompanies: z.array(z.string()),
});

export type CareerAssessment = z.infer<typeof careerAssessmentSchema>;
export type CareerAdvice = z.infer<typeof careerAdviceSchema>;
export type MarketAnalysis = z.infer<typeof marketAnalysisSchema>;
