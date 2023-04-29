import { NextRequest, NextResponse } from "next/server";
import cookie from 'cookie';


export function middleware(request: any) {

    const cookies = cookie.parse(request.headers.cookie || ''); // parse cookies from request headers
    const loggedInCookie = cookies.logged_in;

    const {origin} = request.nextUrl;
    
    if(loggedInCookie && (request.url.includes('register') || request.url.includes('login'))) {
        return NextResponse.rewrite(origin+'/data');
    }

    if(!loggedInCookie && request.url.includes('data')) {
        return NextResponse.rewrite(origin+'/login');
    }
    
    
}