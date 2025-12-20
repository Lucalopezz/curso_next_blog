import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  // dark:text-slate-200 dark:bg-slate-900 - it takes the sistem theme
  return (
    <Suspense fallback={<SpinLoader />}>
      <PostFeatured />
      <PostsList />
    </Suspense>
  );
}
