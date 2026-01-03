"use server";

import { verifyLoginSession } from "@/lib/login/manage-login";
import { postRepository } from "@/repositories/post";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  const isAuthenticated = await verifyLoginSession();

  if (!isAuthenticated) {
    return {
      error: "Faça login novamente em outra aba",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!id || typeof id !== "string") {
    return {
      error: "Dados inválidos",
    };
  }
  let post;
  try {
    post = await postRepository.delete(id);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: [e.message],
      };
    }
    return {
      errors: ["Erro desconhecido"],
    };
  }
  revalidateTag("posts", "max");
  revalidateTag(`post-${post.slug}`, "max");

  return {
    error: "",
    success: true,
  };
}
