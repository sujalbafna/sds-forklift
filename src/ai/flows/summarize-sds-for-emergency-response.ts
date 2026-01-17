'use server';
/**
 * @fileOverview Summarizes an SDS document for emergency response, extracting key information for first responders.
 *
 * - summarizeSdsForEmergencyResponse - A function that summarizes an SDS document for emergency response.
 * - SummarizeSdsForEmergencyResponseInput - The input type for the summarizeSdsForEmergencyResponse function.
 * - SummarizeSdsForEmergencyResponseOutput - The return type for the summarizeSdsForEmergencyResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSdsForEmergencyResponseInputSchema = z.object({
  sdsDocument: z
    .string()
    .describe('The complete text of the Safety Data Sheet (SDS) document.'),
});
export type SummarizeSdsForEmergencyResponseInput = z.infer<typeof SummarizeSdsForEmergencyResponseInputSchema>;

const SummarizeSdsForEmergencyResponseOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the SDS document, focusing on key emergency response procedures, hazards, and necessary precautions.'
    ),
});
export type SummarizeSdsForEmergencyResponseOutput = z.infer<typeof SummarizeSdsForEmergencyResponseOutputSchema>;

export async function summarizeSdsForEmergencyResponse(
  input: SummarizeSdsForEmergencyResponseInput
): Promise<SummarizeSdsForEmergencyResponseOutput> {
  return summarizeSdsForEmergencyResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSdsForEmergencyResponsePrompt',
  input: {schema: SummarizeSdsForEmergencyResponseInputSchema},
  output: {schema: SummarizeSdsForEmergencyResponseOutputSchema},
  prompt: `You are an AI assistant specialized in summarizing Safety Data Sheets (SDS) for emergency responders.

  Your goal is to provide a concise and actionable summary that highlights critical information needed during an emergency situation.

  Consider the SDS document provided below and extract the following key information:

  1.  **Immediate Hazards:** List the most immediate and significant hazards presented by the substance.
  2.  **Emergency Procedures:** Describe the necessary steps for first responders, including:
      *   First Aid measures
      *   Firefighting measures
      *   Accidental release measures
  3.  **Personal Protective Equipment (PPE):** Specify the required PPE for handling the substance during emergencies.
  4.  **Handling and Storage:** Briefly outline safe handling and storage practices to prevent incidents.
  5.  **Stability and Reactivity:** Note any conditions to avoid and potential incompatibilities.

  Prioritize clear, concise language and focus on information crucial for a rapid and effective response.

  SDS Document: {{{sdsDocument}}} `,
});

const summarizeSdsForEmergencyResponseFlow = ai.defineFlow(
  {
    name: 'summarizeSdsForEmergencyResponseFlow',
    inputSchema: SummarizeSdsForEmergencyResponseInputSchema,
    outputSchema: SummarizeSdsForEmergencyResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
