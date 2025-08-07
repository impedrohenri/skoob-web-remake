import { cookies } from "next/headers";

export async function getCookieString(){

    const cookieStore = await cookies();
    const cookieString = cookieStore
    .getAll()
    .map(c => `${c.name}=${c.value}`)
    .join("; ");

    return cookieString;
} 