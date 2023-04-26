import { NextResponse } from "next/server";
import cookie from 'cookie';


export function middleware(request: any) {
    const cookies = cookie.parse(request.headers.cookie || ''); // parse cookies from request headers
    
    if(cookies != undefined && (request.url.includes('register') || request.url.includes('login'))) {
        return NextResponse.redirect(`${process.env.FRONTEND_URL}`+'data');
    }

    if(cookies == undefined && request.url.includes('data')) {
        return NextResponse.redirect(`${process.env.FRONTEND_URL}`+'login');
    }
    
    
}