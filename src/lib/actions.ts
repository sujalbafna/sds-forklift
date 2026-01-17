'use server';

import { analyzeSdsForCompliance } from '@/ai/flows/regulatory-compliance-analysis';
import { summarizeSdsForEmergencyResponse } from '@/ai/flows/summarize-sds-for-emergency-response';
import { z } from 'zod';

const emergencySummarySchema = z.object({
  sdsDocument: z.string(),
});

export async function getEmergencySummary(data: { sdsDocument: string }) {
  const validatedData = emergencySummarySchema.safeParse(data);
  if (!validatedData.success) {
    return {
      error: 'Invalid input.',
    };
  }

  try {
    const result = await summarizeSdsForEmergencyResponse(validatedData.data);
    return { summary: result.summary };
  } catch (e) {
    return {
      error: 'Failed to generate summary. Please try again.',
    };
  }
}

const complianceAnalysisSchema = z.object({
  sdsDocument: z.string(),
  applicableRegulations: z.string(),
});

export async function getComplianceAnalysis(data: {
  sdsDocument: string;
  applicableRegulations: string;
}) {
  const validatedData = complianceAnalysisSchema.safeParse(data);
  if (!validatedData.success) {
    return {
      error: 'Invalid input.',
    };
  }
  
  if (validatedData.data.sdsDocument.trim() === '' || validatedData.data.applicableRegulations.trim() === '') {
    return {
        error: 'SDS Document and Applicable Regulations cannot be empty.',
    }
  }

  try {
    const result = await analyzeSdsForCompliance(validatedData.data);
    return {
      complianceGaps: result.complianceGaps,
      summary: result.summary,
    };
  } catch (e) {
    return {
      error: 'Failed to perform analysis. Please try again.',
    };
  }
}
