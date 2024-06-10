import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto flex flex-col animate__animated animate__fadeInUp">
      <Image className="mx-auto" priority={true} width={120} height={120} src="/lambda-icon.png" alt="LambdaIcon"/>
      <h1 className="text-2xl text-center font-bold">Lambda Assistant</h1>
      <div className="flex flex-col my-2">
        <Button variant="link">
          <Link className="text-[17px]" href="/ai/prompt">
            Prompt Assistant
          </Link>
        </Button>
      </div>
    </main>
  );
}
