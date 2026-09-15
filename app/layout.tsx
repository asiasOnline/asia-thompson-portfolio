import type { Metadata } from "next";
import Head from 'next/head'
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const outfit = Outfit({
  subsets: ["latin"], 
  variable: '--font-outfit',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"], 
  variable: '--font-plus-jakarta-sans',
})

const coolvetica = localFont({
  src: "../public/fonts/coolvetica-rg.otf",
  variable: '--font-coolvetica',
})

export const metadata: Metadata = {
  title: "Asia Thompson - asiasOnline",
  description: "Portfolio for Asia Thompson a digital product designer and full-stack developer.",
};

export default function RootLayout({children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gom0idh.css" />
      </head>
      <body className={`${outfit.variable} ${plus_jakarta_sans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* PostHog is used to collect data for this portfolio project. */}
          <CSPostHogProvider>
            {children}
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
