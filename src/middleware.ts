import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@/context";

export async function middleware(request: NextRequest) {
  const auth = await getAuth();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!auth) {
      return NextResponse.redirect(new URL(`/blocked`, request.url));
    }
  }

  if (pathname.startsWith("/dashboard/users")) {
    if (!auth || auth.role !== "Admin") {
      return NextResponse.redirect(new URL(`/blocked`, request.url));
    }
  }

  if (pathname === "/") {
    if (auth) {
      return NextResponse.redirect(new URL(`/dashboard`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
