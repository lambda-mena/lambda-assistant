import { TbLambda } from "react-icons/tb";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex m-auto">
        <TbLambda className="me-5" size={40} />
        <div className="my-auto">
            Page not found, return <Link className="underline" href="/">here</Link>.
        </div>
      </div>
    </>
  );
}
