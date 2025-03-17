import { deletePost } from "@/app/actions";
import { DeleteButton } from "@/components/custom/DeleteButton";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const getData = async (id: string) => {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
};

export default async function DashboardItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getData(id);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5">
        <div className="py-4 flex items-center justify-between">
          <Link href="/dashboard" className={cn(buttonVariants())}>
            <ArrowLeft />
            Back to posts
          </Link>
          <form action={deletePost}>
            <input hidden name="id" value={id} readOnly />
            <DeleteButton />
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-semibold">{data.title}</p>
          <div className="flex items-center gap-4">
            <Image
              src={data.authorImage}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p>{data.authorName}</p>
            <time className="text-gray-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
          <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
            <Image
              src={data.imageUrl}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
