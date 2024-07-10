"use client";

import { useChat } from "ai/react";
import { PromptMessages } from "@/components/ai/prompt-messages";
import { PromptForm } from "./prompt-form";

export const PromptClient = () => {
  const chatObject = useChat({ api: "/api/prompt" });

  return (
    <>
      {chatObject.messages.length > 0 ? (
        <PromptMessages
          className="flex-auto animate-in fade-in h-96 max-h-full text-lg overflow-y-auto max-w-full text-wrap"
          {...chatObject}
        />
      ) : (
        <div className="flex-auto h-96 m-auto text-lg content-center">
          Try a prompt.
        </div>
      )}
      <PromptForm {...chatObject} />
    </>
  );
};
