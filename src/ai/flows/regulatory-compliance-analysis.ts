'use server';

/**
 * @fileOverview A regulatory compliance analysis AI agent.
 *
 * - analyzeSdsForCompliance - A function that analyzes an SDS document for compliance gaps.
 * - AnalyzeSdsForComplianceInput - The input type for the analyzeSdsForCompliance function.
 * - AnalyzeSdsForComplianceOutput - The return type for the analyzeSdsForCompliance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSdsForComplianceInputSchema = z.object({
  sdsDocument: z
    .string()
    .describe(
      'The SDS document content as a string.'
    ),
  applicableRegulations: z.string().describe('The applicable environmental regulations.'),
});
export type AnalyzeSdsForComplianceInput = z.infer<typeof AnalyzeSdsForComplianceInputSchema>;

const AnalyzeSdsForComplianceOutputSchema = z.object({
  complianceGaps: z.array(z.string()).describe('A list of potential compliance gaps identified in the SDS document.'),
  summary: z.string().describe('A summary of the compliance analysis.'),
});
export type AnalyzeSdsForComplianceOutput = z.infer<typeof AnalyzeSdsForComplianceOutputSchema>;

export async function analyzeSdsForCompliance(input: AnalyzeSdsForComplianceInput): Promise<AnalyzeSdsForComplianceOutput> {
  return analyzeSdsForComplianceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSdsForCompliancePrompt',
  input: {schema: AnalyzeSdsForComplianceInputSchema},
  output: {schema: AnalyzeSdsForComplianceOutputSchema},
  prompt: `You are an expert in environmental regulations.

You will analyze the provided SDS document and identify potential compliance gaps based on the applicable regulations.

SDS Document:
{{{sdsDocument}}}

Applicable Regulations:
{{{applicableRegulations}}}

Identify all compliance gaps and provide a summary of your analysis.

Compliance Gaps: A list of compliance gaps.
Summary: Summary of compliance analysis.
`,
});

const analyzeSdsForComplianceFlow = ai.defineFlow(
  {
    name: 'analyzeSdsForComplianceFlow',
    inputSchema: AnalyzeSdsForComplianceInputSchema,
    outputSchema: AnalyzeSdsForComplianceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
