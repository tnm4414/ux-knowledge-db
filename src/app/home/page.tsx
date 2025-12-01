// GET → show existing ToolTypes
// POST → create a new ToolType row
// Uses a simple form so you can test DB writes
// page the user can visit in the browser

// must stay a SERVER COMPONENT.
// NO "use client"
// NO hooks

// src/app/home/page.tsx   home page

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function page() {
  const toolTypes = await prisma.toolType.findMany();

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        UX Knowledge Database
      </h1>

      <p style={{ marginTop: 10 }}>Next.js + Prisma + Supabase</p>

      {/* Existing Tool Types */}
      <section style={{ marginTop: 30 }}>
        <h2 style={{ fontSize: 24, fontWeight: "bold" }}>Tool Types</h2>

        {toolTypes.length === 0 ? (
          <p style={{ marginTop: 8 }}>No tool types yet.</p>
        ) : (
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {toolTypes.map((tool) => (
              <li key={tool.id}>{tool.name}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Simple form to add a new ToolType */}
      <section style={{ marginTop: 30 }}>
        <h2 style={{ fontSize: 20, fontWeight: "bold" }}>Add a Tool Type</h2>

        <form
          action="/home/tool-types" // 👈 hits the POST route we just created
          method="POST"
          style={{ marginTop: 10, display: "flex", gap: 8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="e.g. Figma"
            style={{
              padding: "8px 10px",
              borderRadius: 6,
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 14px",
              borderRadius: 6,
              border: "none",
              background: "black",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </form>
      </section>

      {/* Back to login */}
      <section style={{ marginTop: 30 }}></section>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 18px",
          background: "black",
          color: "white",
          borderRadius: 8,
        }}
      >
        Go to login Page 
      </Link>
  </main>
  )
}

