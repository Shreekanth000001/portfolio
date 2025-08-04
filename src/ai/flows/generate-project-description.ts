// The AI flow generates project descriptions using keywords related to user experiences and accomplishments.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the project, experiences, and accomplishments.'),
});

export type GenerateProjectDescriptionInput =
  z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z
    .string()
    .describe('A detailed and engaging project description generated from the provided keywords.'),
});

export type GenerateProjectDescriptionOutput =
  z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const generateProjectDescriptionPrompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are a professional copywriter specializing in creating engaging project descriptions for portfolios.

  Based on the following keywords, generate a compelling and detailed project description.

  Keywords: {{{keywords}}}
  `,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateProjectDescriptionPrompt(input);
    return output!;
  }
);
