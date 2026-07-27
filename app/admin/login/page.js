"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code : code }),
      });

      console.log(code);
      

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Invalid code.");
      }

      const redirectTo = searchParams.get("from") || "/admin/new-post";
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
      >
        <div className="text-center">
          <h1 className="text-xl font-bold text-neutral-900">Editor access</h1>
          <p className="text-sm text-neutral-500 mt-1">
            Enter the access code to continue.
          </p>
        </div>

        <input
          type="password"
          autoFocus
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access code"
          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-800/10 focus:border-neutral-400 transition"
        />

        {error && <p className="text-xs text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading || !code}
          className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:shadow-lg transition disabled:bg-neutral-400 disabled:cursor-not-allowed"
        >
          {loading ? "Checking..." : "Continue"}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
