import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function DashboardRoute() {
  // ## DONT'T NEED NOW, CUZ NOW USING THE MIDDLEWARE
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  // if (!user) {
  //   redirect("/api/auth /register");
  // }
  return (
    <div className="flex items-center py-4 justify-between">
      <p>Dashboard Page</p>
      <Link href="/dashboard/create" className={cn(buttonVariants())}>
        Create post
      </Link>
    </div>
  );
}
