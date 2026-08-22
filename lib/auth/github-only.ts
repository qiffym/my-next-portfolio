export const allowedGithubUsernames = ["qiffym"] as const;

export function isAllowedGithubUser(
  user: {
    user_metadata?: {
      user_name?: string | null;
      full_name?: string | null;
      name?: string | null;
      login?: string | null;
      preferred_username?: string | null;
    } | null;
  } | null,
) {
  const metadata = user?.user_metadata ?? {};
  const candidates = [
    metadata.user_name,
    metadata.full_name,
    metadata.name,
    metadata.login,
    metadata.preferred_username,
  ];

  return candidates.some((candidate) => {
    if (!candidate) return false;
    return allowedGithubUsernames.some((allowed) => allowed.toLowerCase() === candidate.toLowerCase());
  });
}
