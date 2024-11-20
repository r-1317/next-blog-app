"use client";
import type { Post } from "@/app/_types/Post";

type Props = {
  post: Post;
};

const PostSummary: React.FC<Props> = (props) => {
  const { post } = props;
  return (
    <div className="border border-slate-400 p-3">
      {post.createdAt.substring(0, 10)}
      {post.categories.map((category) => (
        <span key={category.id} className="ml-2 text-gray-500 border border-gray-300 p-1 rounded">
          {category.name}
        </span>
      ))}
      <div className="font-bold">{post.title}</div>
      {/* <div>{post.content}</div> */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} className= "line-clamp-3" />
    </div>
  );
};

export default PostSummary;