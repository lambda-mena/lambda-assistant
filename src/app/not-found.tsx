import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex m-auto">
        <Image src="/lambda-icon.png" width={80} height={80} alt="lambda-icon" />
        <div className="my-auto">
            Page not found, return <Link className="underline" href="/">here</Link>.
        </div>
      </div>
    </>
  );
}
