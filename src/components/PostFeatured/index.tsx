import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "dfasda";
  const postLink = `/post/${slug}`;
  return (
    <section
      className="grid grid-cols-1 gap-8 mb-16
        sm:grid-cols-2 
        group"
    >
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",

          priority: true,
        }}
      />
      <div className="flex flex-col gap-1 sm:justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2025-4-20">
          20/04/2025
        </time>
        <PostHeading url={postLink} as="h1">
          Ola
        </PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          delectus vero nihil rem, at commodi facilis necessitatibus animi
          officiis eos! Fugit odit, perferendis reiciendis distinctio ut placeat
          porro veritatis? Natus.
        </p>
      </div>
    </section>
  );
}
