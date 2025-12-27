import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

// This page is statically generated at build time.
export const dynamic = "force-static";

export default async function HomePage() {
  // dark:text-slate-200 dark:bg-slate-900 - it takes the sistem theme
  return (
    <Suspense fallback={<SpinLoader className="min-h-[70vh]" />}>
      <PostFeatured />
      <PostsList />
    </Suspense>
  );
}
