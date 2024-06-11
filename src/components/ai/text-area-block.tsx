"use client";

import React from "react";
import { Textarea } from "../ui/textarea";
import styles from "@/styles/scrollbar.module.css";

interface TextAreaBlockProps {
  name: string;
  inputRef: React.LegacyRef<HTMLTextAreaElement>;
  isLoading: boolean;
}

export const TextAreaBlock = ({ name, inputRef, isLoading }: TextAreaBlockProps) => {
  return (
    <div className="text-center lg:flex-1 lg:py-4">
      <Textarea
        ref={inputRef}
        className={`lg:h-full ${styles.scrollbar} resize-none text-wrap placeholder:text-center`}
        placeholder={`Type the ${name.toLowerCase()} here`}
        disabled={isLoading}
        required
      />
    </div>
  );
};
