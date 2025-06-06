import type { Metadata } from "next";
import Head from 'next/head'
import { Figtree } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const figtree = Figtree({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-roboto' });

const coolvetica = localFont({
  src: "../public/fonts/coolvetica-rg.otf",
  variable: '--font-coolvetica',
})

export const metadata: Metadata = {
  title: "Asia Thompson - Asia Does Development",
  description: "Portfolio for Asia Thompson a digital product designer and full-stack developer.",
};

export default function RootLayout({children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} ${coolvetica.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CSPostHogProvider>
            {children}
          </CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
