interface DiscordBot {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

export interface DiscordApplication {
  id: string;
  name: string;
  icon: string;
  description: string;
  bot: DiscordBot;
}
