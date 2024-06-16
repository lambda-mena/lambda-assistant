import { ResponsiveSeparator } from "@/components/ui/responsive-separator";
import { DiscordTemplate } from "@/components/discord/discord-template";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import React, { Suspense } from "react";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function BotExtensionPage() {
  return (
    <main className="flex flex-col py-2 lg:flex-row lg:justify-around">
      <Suspense fallback={<Loader2 className="animate-spin size-12 m-auto" />}>
        <DiscordTemplate />
      </Suspense>
      <ResponsiveSeparator horizontalClasses="w-1/2 lg:w-9/12 mx-auto my-5" />
      <div className="lg:w-1/2 text-center animate__animated animate__fadeIn">
        <div className="font-bold text-lg m-4">Developers</div>
        <div className="flex flex-col justify-center">
          <Card className="size-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
            <CardHeader>
              <CardTitle>Vaatu</CardTitle>
              <CardDescription>Developer</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-around">
              <Link href={"https://github.com/lambda-vaatu"}>
                <FaGithub size={40} />
              </Link>
              <Link href={"https://discord.gg/tNAEM3DzuS"}>
                <FaDiscord size={40} />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="font-bold text-lg m-4">Contributors</div>
        <div className="flex flex-col justify-center">
          <Card className="size-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
            <CardHeader>
              <CardTitle>Flowerfog</CardTitle>
              <CardDescription>Artist</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-around">
              <Link href={"https://www.instagram.com/2green.tea/"}>
                <FaInstagram size={40} />
              </Link>
              <Link href={"https://www.facebook.com/2.Flowerfog"}>
                <FaFacebook size={40} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
