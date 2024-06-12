"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function generateResponse(prompt: string) {
  if (prompt.trim().length == 0)
    return "Please fill the prompt box.";

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (ex) {
    return "😥 Error at getting response, try again.";
  }
}

export async function generateCodeOutput(code: string, error: string) {
  if (code.trim().length == 0 || error.trim().length == 0)
    return "Please fill the code and error boxes.";

  try {
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
  } catch (ex) {
    return "😥 Error at solving the problem, try again.";
  }
}
