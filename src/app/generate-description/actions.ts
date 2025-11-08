'use server';

import { generateProductDescription, GenerateProductDescriptionInput } from '@/ai/flows/generate-product-description';

export async function generateDescription(input: GenerateProductDescriptionInput): Promise<string> {
    try {
        const result = await generateProductDescription(input);
        if (!result.description) {
            throw new Error('The AI did not return a description. Please try again with more specific keywords and features.');
        }
        return result.description;
    } catch (error) {
        console.error('AI Error:', error);
        throw new Error('Failed to generate product description. Please check your input and try again.');
    }
}
