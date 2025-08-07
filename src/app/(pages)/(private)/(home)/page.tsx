
import HomeClient from "./HomeClient";
import { cookies } from 'next/headers';

async function myBooks(userId: string | undefined) {
  
  const res = await fetch(`http://localhost:3000/api?url=https://www.skoob.com.br/v1/bookcase/books/${userId}/shelf_id:0/page:1/limit:200`);

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

  const url = encodeURIComponent(`https://api.skoob.com.br/api2/feed/general/?type=27&user_id=${userId}&limit=1000`)
  const res = await fetch(`http://localhost:3000/api?url=${url}`, {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDcyNjMwNSIsImVtYWlsIjoiaW1sdWNlYXRAZ21haWwuY29tIiwiaWF0IjoxNzU0MjI1NjgzLCJleHAiOjE3NTQ4MzA0ODMsImp0aSI6IjVkNTQ0ZWU5Y2JiZWE4OTdmMGU0YWFlMGZhNzI2YzNmIn0.8NuBqR9EMjdRDwS8d0h8lZ51RWUwQA7rWHinwIinB2o'
    }
  });
  const resp = await res.json();

  

  const { booksId, booksAuthors, booksEditors } = await myBooks(userId);

  return (
    <HomeClient data={resp} booksId={booksId} booksAuthors={booksAuthors} booksEditors={booksEditors}/>
  )
}