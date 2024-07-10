"use client";

import { type UseChatHelpers } from "ai/react";
import { Button } from "@/components/ui/button";
import React, { useRef, KeyboardEvent } from "react";
import styles from "@/styles/scrollbar.module.css";
import { AiOutlineEnter } from "react-icons/ai";
import { Textarea } from "../ui/textarea";

export const PromptForm = ({
  input,
  handleSubmit,
  isLoading,
  handleInputChange,
}: Partial<UseChatHelpers>) => {
  const ref = useRef<HTMLButtonElement>(null);

  const onKeydown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && !e.shiftKey && input!.trim().length >= 2) {
      ref.current!.click();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex animate-in fade-in mx-auto my-5 w-full md:w-2/3 lg:w-9/12 xl:w-1/2"
    >
      <Textarea
        className={`${styles.scrollbar} me-2 min-h-1 h-12 max-h-96 text-lg resize-none`}
        value={input}
        onKeyDown={onKeydown}
        onChange={handleInputChange}
        disabled={isLoading}
        required
      />
      <Button type="submit" className="h-12" variant="outline" ref={ref} disabled={isLoading} size="icon">
        <AiOutlineEnter size={20} />
      </Button>
    </form>
  );
};
