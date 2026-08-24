import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const rootMetadata: Metadata = {
//   metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  alternates: { canonical: "/" },
//   openGraph: {
//     type: "website",
//     locale: siteConfig.locale,
//     url: siteConfig.url,
//     siteName: siteConfig.name,
//     title: siteConfig.title,
//     description: siteConfig.description,
//     images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     images: [siteConfig.ogImage],
//   },
//   robots: { index: true, follow: true },
};
