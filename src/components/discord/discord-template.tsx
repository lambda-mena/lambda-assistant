import { getBot } from "@/server/discord-actions";
import { Button } from "../ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const DiscordTemplate = async () => {
  const discordBot = await getBot();
  const discordData = discordBot.body!;

  return (
    <>
      <div className="flex flex-col text-center gap-4 lg:my-auto lg:w-1/2 animate-in fade-in">
        <div className="flex flex-col w-8/12 mx-auto">
          <Image
            className="mx-auto rounded-xl"
            width={90}
            height={90}
            priority={true}
            src={`https://cdn.discordapp.com/avatars/${discordData.bot.id}/${discordData.bot.avatar}.png`}
            alt="lambda bot icon"
          />
          <span className="font-bold text-lg">{discordData.bot.username}</span>
          <Button className="mt-3 md:w-1/2 md:mx-auto" variant="outline">
            <Link href={"https://discord.com/oauth2/authorize?client_id=1250862911140790324"}>
              Setup application
            </Link>
          </Button>
        </div>
        <p className="text-center w-2/3 mx-auto md:w-1/3">{discordData.description}</p>
      </div>
    </>
  );
};
