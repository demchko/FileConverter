import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";

async function getAuthorPosts(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // ## DONT'T NEED NOW, CUZ NOW USING THE MIDDLEWARE

  // if (!user) {
  //   redirect("/api/auth /register");
  // }
  const posts = await getAuthorPosts(user.id);

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-between">
        <p className="text-2xl font-semibold">Dashboard Page</p>
        <Link href="/dashboard/create" className={cn(buttonVariants())}>
          Create post
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((item) => (
          <PostCardComp item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

interface PostCardCompProps {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
  authorImage: string;
  authorName: string;
  createdAt: Date;
}

export const PostCardComp = ({ item }: { item: PostCardCompProps }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${item.id}`} className="block w-full h-full">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={item.imageUrl}
            alt="post image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3 flex flex-col gap-4">
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-lg max-w-full truncate">{item.content}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={item.authorImage}
                alt="author"
                width={32}
                height={32}
                className="rounded-full"
              />
              <p>{item.authorName}</p>
            </div>
            <time>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(item.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};
