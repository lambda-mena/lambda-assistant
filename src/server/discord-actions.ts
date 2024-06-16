"use server";

import { DiscordApplication } from "@/lib/interfaces";
import axios from "axios";

const baseUrl = "https://discord.com/api/v10";

export async function getBot() {
  try {
    const discordBot = await axios.get(baseUrl + "/applications/@me", {
      headers: { Authorization: `Bot ${process.env.BOT_TOKEN}` },
    });
    
    return { success: true, body: discordBot.data as DiscordApplication };
  } catch (exception) {
    return { success: false };
  }
}
