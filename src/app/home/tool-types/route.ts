//This handles the POST from your form. API Route for creadting data
// This is an API route (server-side code).
// test page will send data to this route via POST.
// Handles the POST and writes to Supabase via Prisma, then redirects back to /test.


// src/app/test/create/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();
  const rawName = formData.get("name");
  const name = typeof rawName === "string" ? rawName.trim() : "";

    // Build an absolute URL for redirects
  const redirectUrl = new URL("/home", req.url);

  if (!name) {
    return NextResponse.redirect(redirectUrl);
  }

  // Write to Supabase via Prisma,
  // ID is auto-generated cuid
  await prisma.toolType.create({
    data: { name },
  });

  // after insert redirect back to /home
  return NextResponse.redirect(redirectUrl);
}

// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session, user }) {
//       if (session.user) {
//         (session.user as any).id = user.id;
//         (session.user as any).role = (user as any).role;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST }}}}}
