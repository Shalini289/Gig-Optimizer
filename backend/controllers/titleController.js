import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateTitles = async (req,res)=>{

const { service } = req.body;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model:"gemini-pro" });

const prompt = `
Generate 5 Fiverr gig titles for:

${service}

Make them SEO optimized.
`;

const result = await model.generateContent(prompt);

const text = result.response.text();

res.json({ titles:text });

};