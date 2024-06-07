import React from "react";
import ReactMarkdown from "react-markdown";
import { Separator } from "./separator";

type MessageProps = {
  content: string;
}

export const Message = ({content}: MessageProps) => {
  return (
    <>
      <Separator />
      <div className="flex p-2">
        <div className="md:text-lg lg:text-2xl xl:text-xl text-start">
          <ReactMarkdown className="markdown">
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};
