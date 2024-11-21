"use client";
import type { Post } from "@/app/_types/Post";
import Link from "next/link";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="border border-slate-400 p-3">
      {post.createdAt.substring(0, 10)}
      {post.categories.map((category) => (
        <span
          key={category.id}
          className="ml-2 rounded border border-gray-500 p-1 text-gray-500"
        >
          {category.name}
        </span>
      ))}
      <Link href={`/posts/${post.id}`}>
        <div className="mb-1 text-lg font-bold">{post.title}</div>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Link>
    </div>
  );
};

export default PostSummary;
