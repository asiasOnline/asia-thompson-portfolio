import type { Metadata } from "next";
import { Raleway, Figtree } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const figtree = Figtree({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-roboto' });

const raleway = Raleway({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Asia Thompson",
  description: "The portfolio for Asia Thompson a digital product designer and full-stack developer.",
};

export default function RootLayout({children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} font-sans`}>
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
