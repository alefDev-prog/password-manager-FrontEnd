import { NextResponse } from "next/server";

export function middleware(request: any) {
    const cookie = request.cookies.get(process.env.COOKIE_NAME);
    console.log(cookie);
    
    if(cookie != undefined && (request.url.includes('register') || request.url.includes('login'))) {
        return NextResponse.redirect(process.env.FRONTEND_URL+'data');
    }

    if(cookie == undefined && request.url.includes('data')) {
        return NextResponse.redirect(process.env.FRONTEND_URL+'login');
    }
    
    
}