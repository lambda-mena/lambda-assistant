"use client";

import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { MessageArea } from "@/components/ui/message-area";
import { AiOutlineEnter } from "react-icons/ai";
import { Input } from "@/components/ui/input";

export const PromptForm = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/prompt'
  });

  return (
    <>
      <MessageArea
        className="flex-auto animate-in fade-in content-center h-96" 
        content={messages} 
      />
      <form onSubmit={handleSubmit} className="flex animate-in fade-in mx-auto my-5 w-full md:w-2/3 lg:w-9/12 xl:w-1/2">
        <Input className="me-2 h-12" placeholder="Send a prompt" value={input} onChange={handleInputChange} disabled={isLoading} required />
        <Button type="submit" className="h-12" variant="outline" disabled={isLoading} size="icon">
          <AiOutlineEnter size={20} />
        </Button>
      </form>
    </>
  );
};
