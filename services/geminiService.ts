
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateJobDescription(title: string, department: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a professional job description for a ${title} in the ${department} department for "Clever Metal Industries LLC". 
      Incorporate specific industrial metal manufacturing context. Include Responsibilities, Safety Requirements (PPE), and Benefits.`,
    });
    return response.text;
  }

  async getHRAssistance(prompt: string, context?: string) {
    const systemInstruction = `You are the specialized AI HR Assistant for "Clever Metal Industries LLC", a steel manufacturing company. 
    You are familiar with the reporting structure (CEO, CIO Mrs. Chayya, COO Mr. Nilesh, CFO Mr. Hitesh). 
    You provide expert advice on labor laws, safety compliance (OSHA standards), manufacturing recruitment, and employee relations within an industrial environment. 
    Always maintain a professional, compliant, and supportive tone.`;

    const fullPrompt = context 
      ? `Context: ${context}\n\nUser Question: ${prompt}`
      : prompt;

    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt,
      config: {
        systemInstruction,
      }
    });
    return response.text;
  }

  async summarizePerformance(reviews: any[]) {
    const reviewsText = JSON.stringify(reviews);
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize these performance reviews for metal industry staff and provide 3 key improvement areas and 3 strengths: ${reviewsText}`,
    });
    return response.text;
  }
}

export const geminiService = new GeminiService();
