import { NextRequest, NextResponse } from "next/server";

//redirect users if depending on their login status
export function middleware(request: any) {
    
    
    const loggedInCookie = request.cookies.get('logged_in')?.value;

    const {origin} = request.nextUrl;
    
    if(loggedInCookie && (request.url.includes('register') || request.url.includes('login'))) {
        return NextResponse.redirect(origin+'/data');
    }

    if(loggedInCookie && request.url == origin) {
        return NextResponse.redirect(origin+'/data');
    }

    if(!loggedInCookie && request.url.includes('data')) {
        return NextResponse.redirect(origin+'/login');
    }

    
    
    
}