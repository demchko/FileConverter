import Link from "next/link";
import { Button } from "../ui/button";

export const NavBar = () => {
  return (
    <div className="w-full bg-gray-300 flex justify-between px-8 py-3">
      <div className="flex gap-10">
        <Link href="/">
          <h1 className="text-3xl font-semibold">NextProj</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/">Dashboard</Link>
        </div>
      </div>
      <div className="flex gap-5">
        <Button>Sign in</Button>
        <Button variant="secondary">Sign up</Button>
      </div>
    </div>
  );
};
