import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="w-full bg-gray-300 flex justify-between px-8 py-3 items-center">
      <div className="flex gap-10">
        <Link href="/">
          <h1 className="text-3xl font-semibold">NextProj</h1>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {user ? (
          <>
            <p>{user.given_name}</p>
            {user.picture && (
              <Image
                src={user.picture}
                alt="avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
            )}
            <LogoutLink className={cn(buttonVariants())}>Logout</LogoutLink>
          </>
        ) : (
          <>
            <LoginLink className={cn(buttonVariants())}>Login</LoginLink>

            <RegisterLink
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </div>
  );
};
