import apiRoute from "@/app/utils/apiRoute";

export async function POST(req: Request) {
  const body = await req.json();
  
  console.log(body)
  const res = await fetch(apiRoute + '/login-jwt/token', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    body: JSON.stringify(body),
    redirect: 'manual',
    duplex: 'half'
  } as any);

  const resp = await res.json();
  console.log(resp)


  return new Response(JSON.stringify(resp));

}
