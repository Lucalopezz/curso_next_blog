import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "./lib/login/manage-login";

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith("/admin/login");
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");
  const isGetRequest = request.method === "GET";

  const shouldBeAuthenticated = isAdminPage && !isLoginPage;
  // separates server actions by get requests (server actions only works with POST)
  const shouldRedirect = shouldBeAuthenticated && isGetRequest;

  // if it is a post (server action), the middleware ignores it
  if (!shouldRedirect) {
    return NextResponse.next();
  }

  const jwtSession = request.cookies.get(
    process.env.LOGIN_COOKIE_NAME || "loginSession",
  )?.value;

  const isAuthenticated = !!jwtSession;

  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: "/admin/:path*",
};
