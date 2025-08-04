import { loginCookies } from "./getCookies";


export async function POST(req: Request) {
  const body = await req.text();
  
  const res = await fetch('https://www.skoob.com.br/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'Referer': 'https://www.skoob.com.br/login/',
      'Origin': 'https://www.skoob.com.br',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'pt-BR,pt;q=0.9',
      'Cache-Control': 'max-age=0',
      'Cookie': loginCookies
    },
    body,
    redirect: 'manual'
  });

  const location = res.headers.get('location');


  return new Response(JSON.stringify({
    success: true,
    redirectTo: location,
    headers: res.headers,
  }), {
    status: res.status,
  });

}
