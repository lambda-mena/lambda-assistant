"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineEnter } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { sendPrompt } from "@/lib/axios";
import { Message } from "@/components/ui/message";

export default function Page() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [prompt, setPrompt] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getPromptResult = (e: FormEvent) => {
    e.preventDefault();
    if (!isAvailable) return;
    setIsAvailable(false);
    setMessage("loading");
    sendPrompt(prompt)
      .then((res) => {
        setMessage(res);
      })
      .catch(() => {
        setMessage("Error at getting response, try again.");
      })
      .finally(() => {
        setPrompt("");
        setIsAvailable(true);
      });
  };

  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      <Message className="flex-auto content-center h-96" content={message} />
      <form
        onSubmit={getPromptResult}
        className="flex w-full mx-auto my-5 w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2"
      >
        <Input
          type="text"
          className="me-2 h-12"
          placeholder="Send a prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          disabled={!isAvailable}
          required
        />
        <Button
          type="submit"
          className="h-12"
          variant="outline"
          disabled={!isAvailable}
          size="icon"
        >
          <AiOutlineEnter size={20} />
        </Button>
      </form>
    </main>
  );
}
