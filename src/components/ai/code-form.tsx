"use client";

import { generateCodeOutput } from "@/server/gemini-actions";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useRef, useState } from "react";
import styles from "@/styles/scrollbar.module.css";
import { TextAreaBlock } from "./text-area-block";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export const CodeForm = () => {
  const [output, setOutput] = useState({ value: "", isLoading: false });
  const codeInputRef = useRef<HTMLTextAreaElement>(null);
  const errorInputRef = useRef<HTMLTextAreaElement>(null);

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let code = codeInputRef.current!.value;
    let error = errorInputRef.current!.value;
    setOutput({ isLoading: true, value: "" });
    const codeResult = await generateCodeOutput(code, error);
    setOutput({ isLoading: false, value: codeResult });
  };

  return (
    <>
      <div className="flex-1 lg:flex-initial lg:w-1/2 flex text-center">
        {output.isLoading ? (
          <Loader2 className="m-auto size-12 animate-spin" />
        ) : (
          <Textarea
            className={`placeholder:text-center ${output.value == "" ? "my-auto" : ""} ${styles.scrollbar} 
            border-0 flex-1 animate__animated animate__fadeIn resize-none text-wrap`}
            placeholder="Waiting for the code"
            value={output.value}
            disabled
          />
        )}
      </div>
      <div className="flex flex-col animate__animated animate__fadeIn">
        <Separator className="flex my-auto hidden lg:block lg:h-96" orientation="vertical" />
        <Separator className="my-4 block lg:hidden" orientation="horizontal" />
      </div>
      <form onSubmit={onFormSubmit} className="lg:w-1/3 flex flex-col gap-y-3 animate__animated animate__fadeIn">
        <TextAreaBlock name="Code" inputRef={codeInputRef} isLoading={output.isLoading} />
        <TextAreaBlock name="Error" inputRef={errorInputRef} isLoading={output.isLoading} />
        <Button className="lg:my-5" type="submit" variant="outline" disabled={output.isLoading}>
          Submit
        </Button>
      </form>
    </>
  );
};
