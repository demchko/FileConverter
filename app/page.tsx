import { prisma } from "@/lib/prisma";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
    },
  });

  return data;
}

export default async function Home() {
  const posts = await getData();
  return (
    <div className="py-6">
      <h1 className="text-3xl font-semibold">Our Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
}
