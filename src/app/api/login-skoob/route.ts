import apiRoute from "@/app/utils/apiRoute";

export async function POST(req: Request) {
  const body = await req.json();
  
  const res = await fetch(apiRoute + '/login-jwt/token', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    body: JSON.stringify(body),
    redirect: 'manual',
    duplex: 'half'
  } as RequestInit & { duplex: 'half' });

  const resp = await res.json();

  return new Response(JSON.stringify(resp));

}
