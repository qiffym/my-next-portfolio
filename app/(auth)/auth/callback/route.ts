import { NextResponse } from "next/server";

import { isAllowedGithubUser } from "@/lib/auth/github-only";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/admin";

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=oauth`);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(`${origin}/auth/login?error=oauth`);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAllowedGithubUser(user)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(`${origin}/auth/error?reason=not_allowed`);
  }

  return NextResponse.redirect(`${origin}${next}`);
}
