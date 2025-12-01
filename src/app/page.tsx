
// src/app/page.tsx   login page


"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";




export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">UX Knowledge Database</h1>

      {!session ? (
        <>
          <p>You are not signed in.</p>
          <button
            onClick={() => signIn("github")}
            className="border px-4 py-2 rounded"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p>Signed in as {session.user?.email ?? session.user?.name}</p>

          <div className="flex gap-3">
            <button
              onClick={() => signOut()}
              className="border px-4 py-2 rounded"
            >
              Sign out
            </button>

            <Link
              href="/home"
              className="border px-4 py-2 rounded bg-black text-white"
            >
              Go to Home Page  
            </Link>
          </div>
        </>
      )}
    </main>
  );
} 
