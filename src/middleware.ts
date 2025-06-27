import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest) {
        // console.log(request)
    }, {
        isReturnToCurrentPage: true,
    }
)


export const config ={
    matcher: [
        /* Match all request path except for the ones starting with:
        - api
        - _next/static
        - _next/image
        - auth
        - favicon.ico
        - login
        - robots.txt
        - images
        - homepage (represented with $ after beginning slash)
        */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|login|robots.txt|images|$).*)',
    ]
}