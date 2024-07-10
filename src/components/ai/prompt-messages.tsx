"use client";

import React, { memo, useEffect, useRef } from "react";
import styles from "@/styles/scrollbar.module.css";
import Markdown from "marked-react";
import { Message } from "ai";
import { Loader2 } from "lucide-react";

type PromptMessagesProps = {
  className: string;
  messages: Message[];
  isLoading: boolean;
  error: Error | undefined;
};

export const PromptMessages = memo(function Message({
  className,
  messages,
  isLoading,
  error
}: PromptMessagesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <div ref={ref} className={`${className} ${styles.scrollbar}`}>
      {messages.map((message) => (
          <>
            <div className="flex flex-col gap-x-2 p-5 animate-in fade-in duration-300" key={message.id}>
              <strong>{message.role == "user" ? "You" : "Lambda"}</strong>
              <div className="my-auto">
                <Markdown>
                  {message.content}
                </Markdown>
              </div>
            </div>
          </>
        ))}
      {isLoading && <div className="p-5 flex gap-x-2"> Lambda is writing <Loader2 className="animate-spin" /> </div>}
      {error && <div className="p-5"> 😢 Lambda ran into a unknown error... </div>}
    </div>
  );
});
