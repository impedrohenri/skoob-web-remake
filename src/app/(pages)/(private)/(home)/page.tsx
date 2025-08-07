
import { getCookieString } from "@/app/utils/getCookieString";
import HomeClient from "./HomeClient";
import { cookies } from 'next/headers';

async function myBooks(userId: string | undefined) {
  
  const res = await fetch(`http://localhost:3000/api?url=/bookcase/show/?bookcase_type=books&user_id=${userId}`, {
    headers: {
      cookie: await getCookieString()
    }
  });

  const resp = await res.json();
  
  const booksId: Set<string> = new Set();
  const booksAuthors: Set<string> = new Set();
  const booksEditors: Set<string> = new Set();

  resp.response.map((book: IBook) => {
    booksId.add(book?.livro_id)
    booksAuthors.add(book.edicao?.autor)
    booksEditors.add(book.edicao?.editora)
  })

  console.log(booksId)
  console.log(booksAuthors)
  console.log(booksEditors)

  return {booksId, booksAuthors, booksEditors}
  
}

export default async function Home() {

  const cookieStore = await cookies();
  const userId: string | undefined = cookieStore.get('user_id')?.value;


  const url = encodeURIComponent(`/feed/general/?type=27&user_id=${userId}&limit=1000`)
  const res = await fetch(`http://localhost:3000/api?url=${url}`, {
    headers: {
      cookie: await getCookieString()
    }
  });
  const resp = await res.json();

  

  const { booksId, booksAuthors, booksEditors } = await myBooks(userId);

  return (
    <HomeClient data={resp} booksId={booksId} booksAuthors={booksAuthors} booksEditors={booksEditors}/>
  )
}