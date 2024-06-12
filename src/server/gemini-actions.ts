"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { ZodError, z } from "zod";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const PromptSchema = z.string().min(2);

const CodeSchema = z.object({
  code: z.string().min(3),
  error: z.string().min(4),
});

export async function generateResponse(raw: string) {
  try {
    const prompt = PromptSchema.parse(raw);
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (exception) {
    if (exception instanceof ZodError) {
      return "😥 The prompt needs to be at least 2 characters long.";
    } else {
      return "😥 Error at getting response, try again.";
    }
  }
}

export async function generateCodeOutput(rawCode: string, rawError: string) {
  try {
    const { code, error } = CodeSchema.parse({ code: rawCode, error: rawError });
    const preparedStatement = `
    Your task is to solve the problem or error between three tildes
    which is caused by the code between three percentages.

    ~~~
    ${error}
    ~~~

    %%%
    ${code}
    %%%
    `;

    const result = await model.generateContent(preparedStatement);
    return result.response.text();
  } catch (exception) {
    if (exception instanceof ZodError) {
      return "The code box needs to have at least 3 characters while the error box needs at least 4.";
    } else {
      return "😥 Error at solving the problem, try again.";
    }
  }
}
