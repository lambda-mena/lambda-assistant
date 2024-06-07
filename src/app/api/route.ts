import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResult = async (prompt: string) => {
  const preparedStatement = `
  You'll be given a prompt enclosed by three tildes, 
  your task is to answer the given prompt.

  ~~~${prompt}~~~
  `;

  const result = await model.generateContent(preparedStatement);
  return result.response.text();
}

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const generatedResult = await generateResult(prompt);
  return Response.json({ message: "🤖 " + generatedResult });
}