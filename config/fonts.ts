import { Geist, Geist_Mono, Manrope, Montserrat } from "next/font/google";

export const montserratHeading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  manrope.variable,
  montserratHeading.variable,
].join(" ");
