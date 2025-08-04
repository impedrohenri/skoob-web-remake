'use client';

import Post from "@/components/post/post";
import { IPost } from "@/app/interfaces/posts";

interface Props {
  data: {
    response: []
  };
}

export default function HomeClient({ data }: Props) {

  const feed = data.response

  return (
    <>
      <div className="flex">
            <div className="w-1/4">
            
            </div>

            <div className="w-2/4 border-secondary border-2 h-full">
                {
                feed.map((post: IPost, key: number) => (
                  post.historico?.texto && <Post key={key} post={post}/>
                ))
                }
            </div>

            <div className="w-1/4">
      
            </div>
      </div>
    </>
  );
}
