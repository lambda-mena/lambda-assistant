import React, { memo } from "react";
import ReactMarkdown from "react-markdown";

type MessageProps = {
  className: string;
  content: string;
};

const Message = memo(({ content, className }: MessageProps) => {
  const lineBreak = content.split(/\r?\n|\r|\n/g).length;
  let renderedContent: JSX.Element = <>Hi!</>;
  const markdownClasses =
    "markdown max-h-full text-lg overflow-y-auto max-w-full text-wrap";
  const variableClass = `${className} ${
    lineBreak >= 4 ? "text-start" : "text-center"
  }`;

  renderedContent = content ? (
    <ReactMarkdown className={markdownClasses}>{content}</ReactMarkdown>
  ) : (
    renderedContent
  );

  return <div className={variableClass}>{renderedContent}</div>;
});

Message.displayName = "Message";
export { Message };
