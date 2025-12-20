import { formatDatetime, formatRelativeDate } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  postHeading: "h1" | "h2";
  postLink: string;
  createdAt: string;
  postTitle: string;
  postExcerpt: string;
};
// You should not pass Post as a prop because, if this component is used in a
// client side, it will show all posts data including sensitive data.
export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  postTitle,
  postExcerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {postTitle}
      </PostHeading>

      <p>{postExcerpt}</p>
    </div>
  );
}
