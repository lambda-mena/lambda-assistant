"use client";

import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/scrollbar.module.css";

type MessageProps = {
  className: string;
  content: string;
};

export const Message = memo(function Message({ content , className }: MessageProps) {
  const lineBreak = content.split(/\r?\n|\r|\n/g).length;
  const markdownClasses = `markdown ${styles.scrollbar} max-h-full text-lg overflow-y-auto max-w-full text-wrap`;
  const variableClass = `${className} ${lineBreak >= 4 ? "text-start" : "text-center"}`;

  return(
    <div className={variableClass}>
      <ReactMarkdown className={markdownClasses}>
        {content}
      </ReactMarkdown>
    </div>
  );
});
