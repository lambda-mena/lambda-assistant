import { type CoreMessage, streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = await streamText({
      model: google('models/gemini-1.5-flash-latest'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toAIStreamResponse();
  } catch (ex) {
    console.log("Error at giving response...");
    return NextResponse.json({ message: "😢 Unable to retrieve a response." });
  }
}