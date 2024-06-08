import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResult = async (prompt: string) => {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    const generatedResult = await generateResult(prompt);
    return NextResponse.json({ message: generatedResult }, { status: 200 });
  } catch (exception) {
    return NextResponse.json({ message: "Unable to return message." }, { status: 500 });
  }
}