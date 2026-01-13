import ErrorMessage from "@/components/ErrorMessage";
import { findAllPostFromApiAdmin } from "@/lib/post/queries/admin";
import Link from "next/link";
import { DeletePostButton } from "../DeletePostButton";

export async function PostsListAdmin() {
  const postsRes = await findAllPostFromApiAdmin();

  if (!postsRes.success) {
    console.log(postsRes.errors);
    return (
      <ErrorMessage
        contentTitle="Ei 😅"
        content="Tente fazer login novamente"
      />
    );
  }

  const posts = postsRes.data;
  if (posts.length <= 0) {
    return (
      <ErrorMessage contentTitle="Ei!" content="Bora criar algum post? 🤔" />
    );
  }
  return (
    <div className="mb-16">
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className={`py-2 px-2 flex gap-2 items-center justify-between ${
              !post.published ? "bg-slate-300" : ""
            }`}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className="text-xs text-slate-600 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
