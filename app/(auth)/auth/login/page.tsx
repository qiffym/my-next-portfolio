import { redirect } from "next/navigation";

import { GithubLoginButton } from "@/components/auth/github-login-button";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage({ searchParams }: { searchParams?: Promise<{ error?: string }> }) {
  const params = searchParams ? await searchParams : {};
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (data?.claims) {
    redirect("/admin");
  }

  return (
    <div className="w-full max-w-md rounded-[28px] border border-border/80 bg-card p-6 shadow-lg shadow-foreground/5 sm:p-8">
      <div className="mb-8 space-y-3">
        <p className="text-sm text-right uppercase tracking-[0.2em] text-muted-foreground">Private access</p>
        <h1 className="text-3xl font-bold leading-4 text-foreground">Welcome!</h1>
        <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
      </div>

      {params.error === "not_allowed" ? (
        <p className="mb-4 rounded-2xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          This GitHub account is not authorized for this project.
        </p>
      ) : null}

      <GithubLoginButton />

      <p className="mt-6 text-center text-sm text-muted-foreground">Only the owner&apos;s GitHub account is allowed.</p>
    </div>
  );
}
