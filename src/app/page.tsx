"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "@/components/ui/message";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AiOutlineEnter } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { sendPrompt } from "@/lib/axios";

export default function Home() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const updateMessages = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  const getPromptResult = async (e: FormEvent) => {
    e.preventDefault();
    updateMessages("😎 " + prompt);
    setIsAvailable(false);
    const result = await sendPrompt(prompt!);
    setPrompt("");
    updateMessages(result);
    setIsAvailable(true);
  };

  return (
    <main className="flex-1 flex flex-col justify-between mx-auto w-9/12 md:w-2/3 lg:w-9/12 xl:w-1/2">
      <ScrollArea className="mb-auto flex flex-col max-h-[680px] md:max-h-[900px] lg:max-h-[1000px] xl:max-h-[700px]">
        {messages.map((v, i) => {
          return <Message key={i} content={v} />;
        })}
        <Separator />
      </ScrollArea>
      <form onSubmit={getPromptResult} className="flex w-full my-5">
        <Input
          type="text"
          className="me-2 h-12"
          placeholder="Send a prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          disabled={!isAvailable}
          required
        />
        <Button type="submit" className="h-12">
          <AiOutlineEnter size={20}/>
        </Button>
      </form>
    </main>
  );
}
