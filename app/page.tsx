import { prisma } from "@/lib/prisma";
import { PostCardComp } from "./dashboard/page";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default async function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold py-4">Home Page</h1>
      <Suspense
        fallback={
          <div className="w-full h-screen bg-gray-100 rounded-lg flex items-center justify-center">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        }
      >
        <PostsList />
      </Suspense>
    </div>
  );
}

const getAllPost = async () => {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      authorName: true,
      authorImage: true,
      imageUrl: true,
      createdAt: true,
    },
  });
  return data;
};

const PostsList = async () => {
  const posts = await getAllPost();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((item) => (
        <PostCardComp item={item} key={item.id} />
      ))}
    </div>
  );
};
