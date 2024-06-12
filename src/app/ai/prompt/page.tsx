import { PromptForm } from "@/components/ai/prompt-form";
import { generateResponse } from "@/server/gemini";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      <PromptForm sendPrompt={generateResponse} />
    </main>
  );
}
