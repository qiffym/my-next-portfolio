import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/auth/logout-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isAllowedGithubUser } from "@/lib/auth/github-only";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (!isAllowedGithubUser(user)) {
    await supabase.auth.signOut();
    redirect("/auth/error?reason=not_allowed");
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8">
      <header className="rounded-[28px] border border-border/80 bg-card p-6 shadow-lg shadow-foreground/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-foreground">GitHub-only dashboard</h1>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>GitHub user</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-foreground">{user.user_metadata?.user_name ?? user.email}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-foreground">Allowed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-foreground">Portfolio</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
