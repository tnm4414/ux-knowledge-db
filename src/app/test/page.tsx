// GET → show existing ToolTypes
// POST → create a new ToolType row
// Uses a simple form so you can test DB writes
// page the user can visit in the browser

// must stay a SERVER COMPONENT.
// NO "use client"
// NO hooks

// src/app/test/page.tsx

import Link from "next/link";


export default function HomePage() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        UX Knowledge Database
      </h1>

      <p style={{ marginTop: 10 }}>Next.js + Prisma + Supabase</p>

      <Link
        href="/test"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 18px",
          background: "black",
          color: "white",
          borderRadius: 8,
        }}
      >
        Go to Test Page 
      </Link>
    </main>
  );
}
