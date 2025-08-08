import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const whenNotAuthenticated = '/login';

const publicRoutes = [
    {path: '/login', whenAuthenticated: 'redirect'}
]

export default async function middleware(request: NextRequest){
    const path = request.nextUrl.pathname;

    const publicRoute = publicRoutes.map(route => {return route.path === path})
    const cookiesss = await cookies()
    const token = cookiesss.get('user_token')

    if (!!token && publicRoute[0]){

        return NextResponse.redirect(request.nextUrl.origin)
    } else if (!token && !publicRoute[0]){

        return NextResponse.redirect(request.nextUrl.origin + whenNotAuthenticated )

    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}