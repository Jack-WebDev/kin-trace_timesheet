import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@/context";

export async function middleware(request: NextRequest) {
  const auth = await getAuth();
  const user = auth?.role.toLowerCase();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith(`/${user}/home`)) {
    if (!auth) {
      return NextResponse.redirect(new URL(`/blocked`, request.url));
    }
  }

  if (pathname.startsWith("/home/users")) {
    if (!auth || auth.role !== "Admin") {
      return NextResponse.redirect(new URL(`/blocked`, request.url));
    }
  }

  if (pathname === "/") {
    if (auth) {
      return NextResponse.redirect(new URL(`/${user}/home`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
