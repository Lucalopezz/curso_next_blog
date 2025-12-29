import type { Metadata } from "next";
import { MenagePostForm } from "@/components/admin/MenagePostForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Criar post",
};

export default async function AdminPostNewPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Criar novo post</h1>
      <MenagePostForm />
    </div>
  );
}
