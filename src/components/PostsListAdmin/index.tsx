import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

export async function PostsListAdmin() {
  const posts = await findAllPostAdmin();
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

            <button
              className="text-red-500 cursor-pointer transition &_svg]:w-4 [&_svg]:h-4 hover:scale-120 hover:text-red-700"
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
