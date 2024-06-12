"use client";

import { generateResponse } from "@/server/gemini-actions";
import { FormEvent, useRef, useState } from "react";
import { Message } from "@/components/ui/message";
import { Button } from "@/components/ui/button";
import { AiOutlineEnter } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export const PromptForm = () => {
  const [output, setOutput] = useState({ msg: "Hi!", isLoading: false });
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleForm(isLoading: boolean, msg: string = "Hi!") {
    setOutput({ isLoading, msg });
  }

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    toggleForm(true);
    const promptResult = await generateResponse(inputRef.current.value);
    inputRef.current.value = "";
    toggleForm(false, promptResult);
  };

  return (
    <>
      {output.isLoading ? 
      <Loader2 className="m-auto size-12 animate-spin" /> : 
      <Message 
        className="flex-auto animate__animated animate__fadeIn content-center h-96" 
        content={output.msg} 
      /> }
      <form onSubmit={onFormSubmit} className="flex animate__animated animate__fadeInUp mx-auto my-5 w-full md:w-2/3 lg:w-9/12 xl:w-1/2">
        <Input ref={inputRef} className="me-2 h-12" placeholder="Send a prompt" disabled={output.isLoading} required />
        <Button type="submit" className="h-12" variant="outline" disabled={output.isLoading} size="icon">
          <AiOutlineEnter size={20} />
        </Button>
      </form>
    </>
  );
};
