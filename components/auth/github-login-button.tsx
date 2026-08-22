"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GitHubIcon } from "@/components/auth/github-icon";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { safeNextPath } from "@/lib/supabase/safe-next-path";

export function GithubLoginButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleLogin() {
    setIsLoading(true);
    setErrorMessage(null);

    const supabase = createClient();
    const next = new URLSearchParams(window.location.search).get("next");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(safeNextPath(next, "/admin"))}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
      return;
    }

    router.refresh();
  }

  return (
    <div className="space-y-3">
      <Button type="button" onClick={handleLogin} disabled={isLoading} className="w-full rounded-xl py-6">
        <span className="flex items-center justify-center gap-2">
          <GitHubIcon className="size-4" />
          {isLoading ? "Redirecting to GitHub..." : "Continue with GitHub"}
        </span>
      </Button>

      {errorMessage ? (
        <p className="rounded-2xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
