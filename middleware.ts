import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Routes that require an authenticated user */
const PROTECTED = [
  "/account",
  "/my-bets",
  "/deposit",
  "/withdraw",
];

/** Routes that authenticated users should not access */
const AUTH_ONLY = ["/sign-in", "/sign-up"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("BP-TOKEN")?.value;
  const isAuthenticated = Boolean(token);

  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));
  const isAuthRoute = AUTH_ONLY.some((p) => pathname.startsWith(p));

  if (isProtected && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    url.searchParams.set("returnUrl", pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|public).*)",
  ],
};
