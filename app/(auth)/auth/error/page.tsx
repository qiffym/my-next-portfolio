import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AuthErrorPage({ searchParams }: { searchParams?: Promise<{ reason?: string }> }) {
  const params = searchParams ? await searchParams : {};

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-md border-destructive/30 bg-card shadow-lg shadow-foreground/5">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Access denied</CardTitle>
          <CardDescription>
            {params.reason === "not_allowed"
              ? "This GitHub account is not authorized to access the admin area."
              : "You do not have permission to access this page."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Only the owner&apos;s GitHub account is allowed to continue.</p>
          <Link href="/auth/login" className="block">
            <Button className="w-full">Back to login</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
