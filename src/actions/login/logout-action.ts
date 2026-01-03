"use server";

import { deleteLoginSession } from "@/lib/login/manage-login";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await deleteLoginSession();
  redirect("/");
  return;
}
