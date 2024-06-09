"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineEnter } from "react-icons/ai";
import { FormEvent, useRef, useState } from "react";
import { sendPrompt } from "@/lib/axios";
import { Message } from "@/components/ai/message";
import { Loader2 } from "lucide-react";

export default function Page() {
  const [canPrompt, setCanPrompt] = useState(true);
  const [message, setMessage] = useState<string>("");
  const promptRef = useRef<HTMLInputElement>(null);

  const getPromptResult = (e: FormEvent) => {
    e.preventDefault();
    if (!canPrompt || !promptRef.current) return;
    setCanPrompt(false);
    setMessage("loading");
    sendPrompt(promptRef.current.value)
      .then((res) => {
        setMessage(res);
      })
      .catch(() => {
        setMessage("Error at getting response, try again.");
      })
      .finally(() => {
        promptRef.current!.value = "";
        setCanPrompt(true);
      });
  };

  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      {message == "loading" ? (
        <Loader2 className="m-auto size-12 animate-spin" />
      ) : (
        <Message className="flex-auto content-center h-96" content={message} />
      )}
      <form
        onSubmit={getPromptResult}
        className="flex w-full mx-auto my-5 w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2"
      >
        <Input
          type="text"
          ref={promptRef}
          className="me-2 h-12"
          placeholder="Send a prompt"
          disabled={!canPrompt}
          required
        />
        <Button
          type="submit"
          className="h-12"
          variant="outline"
          disabled={!canPrompt}
          size="icon"
        >
          <AiOutlineEnter size={20} />
        </Button>
      </form>
    </main>
  );
}
