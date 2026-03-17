import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateKeywords = async (req,res)=>{

const { service } = req.body;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model:"gemini-pro" });

const prompt = `
Generate 10 SEO Fiverr keywords for this service:

${service}
`;

const result = await model.generateContent(prompt);

const text = result.response.text();

res.json({ keywords:text });

};