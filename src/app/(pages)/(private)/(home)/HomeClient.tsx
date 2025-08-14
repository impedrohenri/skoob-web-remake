import Post from "@/components/post/post";
import { IPost } from "@/app/interfaces/posts";

interface Props {
  data: {
    response: []
  };
  booksId: Set<string>;
  booksAuthors: Set<string>;
  booksEditors: Set<string>;
}

export default function HomeClient({ data, booksId, booksAuthors, booksEditors }: Props) {

  const feed = data.response

  const orderedFeed = [...feed].sort((a, b) => {
  const score = (item: IPost) => {
    let pontos = 0;
    if (booksId.has(item.livro_id)) pontos += 3;
    if (booksAuthors.has(item.edicao?.autor)) pontos += 2.5;
    if (booksEditors.has(item.edicao?.editora)) pontos += 1;
    return pontos;
  };

  return score(b) - score(a); // ordem decrescente de prioridade
});

  return (
    <>
      <div className="flex">
        <div className="hidden lg:block w-1/4">

        </div>

        <div className="w-4/4 md:w-3/4 lg:w-2/4 border-secondary border-2 h-full mx-auto">
          {
            orderedFeed.map((post: IPost, key: number) => (
               ['26', '27'].includes(String(post.tipo)) && <Post key={key} post={post} />
            ))
          }
        </div>

        <div className="hidden md:block w-1/4">

        </div>
      </div>
    </>
  );
}
