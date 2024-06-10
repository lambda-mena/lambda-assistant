import { PromptForm } from "@/components/ai/prompt-form";
import { generateResponse } from "@/actions/gemini";

export default function Page() {
  const handlePromptResult = async (prompt: string) => {
    "use server";
    try {
      const promptResult = await generateResponse(prompt);
      return promptResult;
    } catch (ex) {
      return "😥 Error at getting response, try again.";
    }
  };

  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      <PromptForm sendPrompt={handlePromptResult} />
    </main>
  );
}
