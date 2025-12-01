//This handles the POST from your form. API Route for creadting data
// This is an API route (server-side code).
// test page will send data to this route via POST.
// Handles the POST and writes to Supabase via Prisma, then redirects back to /test.


// src/app/test/create/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name")?.toString() || "";

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  // Write to Supabase via Prisma
  await prisma.toolType.create({
    data: { name },
  });

  // Redirect back to /test
  return NextResponse.redirect("/home");
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

// export { handler as GET, handler as POST };
