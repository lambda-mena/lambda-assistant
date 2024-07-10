"use client";

import { useChat } from "ai/react";
import { KeyboardEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageArea } from "@/components/ui/message-area";
import styles from "@/styles/scrollbar.module.css";
import { AiOutlineEnter } from "react-icons/ai";
import { Textarea } from "../ui/textarea";

export const PromptForm = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({api: '/api/prompt'});
  const ref = useRef<HTMLButtonElement>(null);

  const clickSubmitButton = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      ref.current!.click();
    }
  }

  return (
    <>
      {messages.length > 0 ? <MessageArea
        className="flex-auto animate-in fade-in h-96" 
        content={messages}
        isLoading={isLoading}
      /> : <div className="flex-auto h-96 m-auto text-lg content-center"> Try a prompt. </div>}
      <form onSubmit={handleSubmit} className="flex animate-in fade-in mx-auto my-5 w-full md:w-2/3 lg:w-9/12 xl:w-1/2">
        <Textarea
          className={`${styles.scrollbar} me-2 min-h-1 h-12 max-h-96 text-lg resize-none`}
          value={input}
          onKeyDown={(e) => clickSubmitButton(e)}
          onChange={handleInputChange}
          disabled={isLoading}
          required
        />
        <Button type="submit" className="h-12" variant="outline" ref={ref} disabled={isLoading} size="icon">
          <AiOutlineEnter size={20} />
        </Button>
      </form>
    </>
  );
};
