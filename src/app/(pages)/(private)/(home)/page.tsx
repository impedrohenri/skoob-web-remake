
import HomeClient from "./HomeClient";

export default async function Home() {
  

  const res = await fetch(`http://localhost:3000/api?url=https://www.skoob.com.br/v1/feed/all/1/limit:100`);


  const resp = await res.json();

  return(
    <HomeClient data={resp}/>
  )
}