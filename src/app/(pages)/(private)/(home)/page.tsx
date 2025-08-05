
import HomeClient from "./HomeClient";
import { cookies } from 'next/headers';

async function myBooks() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('user_id')?.value;
  const res = await fetch(`http://localhost:3000/api?url=https://www.skoob.com.br/v1/bookcase/books/${10147464}/shelf_id:0/page:1/limit:1000`);

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

  const res = await fetch(`http://localhost:3000/api?url=https://www.skoob.com.br/v1/feed/all/1/limit:200`, {
    next: {
      revalidate: 600*6
    }
  });
  const resp = await res.json();

  const { booksId, booksAuthors, booksEditors } = await myBooks();

  return (
    <HomeClient data={resp} booksId={booksId} booksAuthors={booksAuthors} booksEditors={booksEditors}/>
  )
}