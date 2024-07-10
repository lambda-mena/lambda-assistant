"use client";

import React, { memo, useEffect, useRef } from "react";
import styles from "@/styles/scrollbar.module.css";
import Markdown from "marked-react";
import { Message } from "ai";

type MessageProps = {
  className: string;
  content: Message[];
  isLoading: boolean;
};

export const MessageArea = memo(function Message({
  className,
  content,
  isLoading,
}: MessageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <div ref={ref} className={`${className} ${styles.scrollbar} max-h-full text-lg overflow-y-auto max-w-full text-wrap`}>
      {content.map((message) => (
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
      {isLoading && <div className="p-5"> Lambda is writing... </div>}
    </div>
  );
});
