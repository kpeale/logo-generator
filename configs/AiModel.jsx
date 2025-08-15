const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require('@google/generative-ai');

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-pro',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

export const AIDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `Based on Logo of type Modern Mascot Logos Generate a text prompt to create a mascot logo`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: '```json\n\n "ideas": [\n "Chef Elephant with spices",\n\n]',
        },
      ],
    },
  ],
});
