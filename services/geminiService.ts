
import { GoogleGenAI, Type } from "@google/genai";
import { DesignSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getDesignSuggestion(genre: string, targetAudience: string, mood: string): Promise<DesignSuggestion> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Suggest a professional book interior layout design for a ${genre} book targeting ${targetAudience} with a ${mood} mood.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          styleName: { type: Type.STRING },
          typography: {
            type: Type.OBJECT,
            properties: {
              heading: { type: Type.STRING },
              body: { type: Type.STRING }
            },
            required: ["heading", "body"]
          },
          layoutSpecs: {
            type: Type.OBJECT,
            properties: {
              margins: { type: Type.STRING },
              lineSpacing: { type: Type.STRING },
              ornamentation: { type: Type.STRING }
            },
            required: ["margins", "lineSpacing", "ornamentation"]
          },
          rationale: { type: Type.STRING }
        },
        required: ["styleName", "typography", "layoutSpecs", "rationale"]
      }
    }
  });

  return JSON.parse(response.text.trim());
}
