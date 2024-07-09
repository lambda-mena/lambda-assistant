"use client";

import React, { memo, useEffect, useRef } from "react";
import styles from "@/styles/scrollbar.module.css";
import Markdown from "marked-react";
import { Message } from "ai";

type MessageProps = {
  className: string;
  content: Message[];
};

export const MessageArea = memo(function Message({
  content,
  className,
}: MessageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <div ref={ref} className={`${className} ${styles.scrollbar} max-h-full text-lg overflow-y-auto max-w-full text-wrap`}>
      {content.length > 0 &&
        content.map((message) => (
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
      {content.length <= 0 && <div className="text-center">Try a prompt, win a output.</div>}
    </div>
  );
});
