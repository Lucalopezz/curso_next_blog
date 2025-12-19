import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  // dark:text-slate-200 dark:bg-slate-900 - it takes the sistem theme
  return (
    <Container>
      <Header />

      <section
        className="grid grid-cols-1 gap-8 mb-16
        sm:grid-cols-2 
        group"
      >
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            // because it's in the first fold of the page, priority is needed (other images can use lazy loading)
            priority
          />
        </Link>
        <div className="flex flex-col gap-1 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2025-4-20">
            20/04/2025
          </time>
          <PostHeading url="#" as="h1">Ola</PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            delectus vero nihil rem, at commodi facilis necessitatibus animi
            officiis eos! Fugit odit, perferendis reiciendis distinctio ut
            placeat porro veritatis? Natus.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}
