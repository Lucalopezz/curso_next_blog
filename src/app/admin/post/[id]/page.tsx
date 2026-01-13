import { MenagePostForm } from "@/components/admin/MenagePostForm";
import { findPostByIdFromApiAdmin } from "@/lib/post/queries/admin";
import { PublicPostForApiSchema } from "@/lib/post/schemas";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type AdminPostIdPageProps = {
  params: Promise<{
    id: string;
  }>;
};
export const metadata: Metadata = {
  title: "Editar post",
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  const { id } = await params;
  const postRes = await findPostByIdFromApiAdmin(id);

  if (!postRes.success) {
    notFound();
  }

  const post = postRes.data;

  const publicPost = PublicPostForApiSchema.parse(post);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-extrabold">Editar post</h1>
      <MenagePostForm mode="update" publicPost={publicPost} />
    </div>
  );
}
