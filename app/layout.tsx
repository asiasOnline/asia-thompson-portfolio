import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asia Thompson",
  description: "The portfolio for Asia Thompson a digital product designer and full-stack developer with expertise in data engineering.",
};

export default function RootLayout({children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
