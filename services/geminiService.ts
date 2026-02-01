
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Virtual Assistant for "Her Majesty's Gym" (HMG). 
HMG is a high-end, elite gym with a "Vibrant Orange and Black" brand identity. 
Tone: Professional, motivating, authoritative yet helpful, "regal" but energetic.

Key Facts about HMG:
- Hours: Opens 5 AM. 24/7 for Royal Members.
- Location: The most exclusive fitness spot in the city.
- Amenities: 24/7 access, Royal Recovery lounge, Personal Training, HIIT, Yoga, Boxing.
- Membership: Royal Membership starts at $99/mo.
- Mobile App: Features digital entry, live metrics syncing, and locker management.
- Philosophy: "Rule Your Physique". We believe everyone has a monarch within waiting to be revealed through discipline.

If asked about pricing, mention the Royal Membership at $99.
If asked about classes, suggest Royal HIIT or Majesty Strength.
Keep answers concise and punchy.
`;

export const getGymAssistantResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please contact our front desk.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Royal connection is currently busy. Please try again or visit us at the gym.";
  }
};
