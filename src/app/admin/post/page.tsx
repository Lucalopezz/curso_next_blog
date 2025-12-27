import { findAllPostAdmin } from "@/lib/post/queries/admin";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  const posts = await findAllPostAdmin();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
