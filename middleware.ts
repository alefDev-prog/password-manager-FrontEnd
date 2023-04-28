import { NextResponse } from "next/server";
import cookie from 'cookie';


export function middleware(request: any) {
    /*const cookies = cookie.parse(request.headers.cookie || ''); // parse cookies from request headers
    console.log(cookies);
    
    if(Object.keys(cookies).length !== 0 && (request.url.includes('register') || request.url.includes('login'))) {
        return NextResponse.redirect(`${process.env.FRONTEND_URL}`+'data');
    }

    if(Object.keys(cookies).length === 0 && request.url.includes('data')) {
        return NextResponse.redirect(`${process.env.FRONTEND_URL}`+'login');
    }
    */
    
}