"use server";

import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const createNewPost = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const img = formData.get("img") as string;

  await prisma.blogPost.create({
    data: {
      title: title,
      content: content,
      imageUrl: img,
      authorId: user.id,
      authorName: user.given_name || "Unkwonn",
      authorImage:
        user.picture || "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    },
  });

  redirect("/dashboard");
};
