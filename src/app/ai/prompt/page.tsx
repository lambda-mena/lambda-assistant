import { PromptClient } from "@/components/ai/prompt-client";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      <PromptClient />
    </main>
  );
}
