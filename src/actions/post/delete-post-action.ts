"use server";

export async function deletePostAction(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return id;
}
