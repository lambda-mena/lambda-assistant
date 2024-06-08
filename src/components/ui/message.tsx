import React from "react";
import ReactMarkdown from "react-markdown";
import { Loader2 } from "lucide-react";

type MessageProps = {
  className: string;
  content: string;
};

export const Message = ({ content, className }: MessageProps) => {
  let renderedContent: JSX.Element = <>It&apos;s a pleasure to have you here</>;
  const markdownClasses = "markdown max-h-full text-lg overflow-y-auto max-w-full text-wrap";
  const variableClass = `${className} ${content.length >= 500 ? "text-start" : "text-center"}`;

  if (content == "loading") {
    renderedContent = <Loader2 className="mx-auto size-12 animate-spin" />;
  } else {
    renderedContent = content ? 
      <ReactMarkdown className={markdownClasses}>{content}</ReactMarkdown> : renderedContent;
  }

  return (
    <div className={variableClass}>
      {renderedContent}
    </div>
  );
};
