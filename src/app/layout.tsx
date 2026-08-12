import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Nahire | Founder, Operator, Builder",
  description: "Portfolio of Abhishek Nahire - Founder's Associate, Builder, and Operations leader.",
  openGraph: {
    title: "Abhishek Nahire | Founder, Operator, Builder",
    description: "Portfolio of Abhishek Nahire - Founder's Associate, Builder, and Operations leader.",
    url: "https://abhisheknahire.com",
    siteName: "Abhishek Nahire",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground relative">
        {children}
      </body>
    </html>
  );
}
