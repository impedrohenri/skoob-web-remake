import { cookies } from "next/headers";
import apiRoute from "../utils/apiRoute";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const urlParam: string | null = searchParams.get('url');

    const cookieStore = await cookies();
    const userToken: string | undefined = cookieStore.get('user_token')?.value;

    if (!urlParam) {
        return new Response(JSON.stringify({ error: 'URL obrigatória' }), {
            status: 400,
        });
    }

    const res = await fetch(apiRoute + urlParam, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
    });

    const resp = await res.json()

    return new Response(JSON.stringify(resp), {
        status: res.status,
        headers: { 'content-type': 'application/json' },
    })
}




export async function POST(req: Request) {

    const { searchParams } = new URL(req.url)
    const urlParam: string | null = searchParams.get('url')

    if (!urlParam) {
        return new Response(JSON.stringify({ error: 'URL obrigatória' }), {
            status: 400,
        });
    }

    const res = await fetch(urlParam, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDcyNjMwNSIsImVtYWlsIjoiaW1sdWNlYXRAZ21haWwuY29tIiwiaWF0IjoxNzU0MjI1NjgzLCJleHAiOjE3NTQ4MzA0ODMsImp0aSI6IjVkNTQ0ZWU5Y2JiZWE4OTdmMGU0YWFlMGZhNzI2YzNmIn0.8NuBqR9EMjdRDwS8d0h8lZ51RWUwQA7rWHinwIinB2o',
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: req.body,
        duplex: 'half' ,
    } as RequestInit & { duplex: 'half' })

    const resp = await res.json()

    return new Response(JSON.stringify(resp), {
        status: res.status,
        headers: {...res.headers}
    })
}