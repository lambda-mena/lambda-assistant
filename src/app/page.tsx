import { Button } from "@/components/ui/button";
import { TbLambda } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto flex flex-col animate__animated animate__fadeInUp">
      <TbLambda className="my-5 mx-auto" size={60} />
      <h1 className="text-2xl text-center font-bold">Lambda Assistant</h1>
      <div className="flex flex-col my-2 text-[17px]">
        <Button className="py-0" variant="link">
          <Link href="/ai/prompt">
            Prompt Assistant
          </Link>
        </Button>
        <Button className="py-0" variant="link">
          <Link href="/ai/code-fixer">
            Code Assistant
          </Link>
        </Button>
      </div>
    </main>
  );
}
