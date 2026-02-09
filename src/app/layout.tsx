import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentine's Gift for Theodore | A Special Surprise",
  description:
    "A special Valentine's Day surprise from Chérie to Theodore. Explore love letters, precious moments, and heartfelt gifts crafted with love.",
  keywords: ["Valentine's Day", "love letter", "gift", "surprise", "romantic"],
  openGraph: {
    title: "Valentine's Gift for Theodore | A Special Surprise",
    description: "A special Valentine's Day surprise from Chérie to Theodore.",
    type: "website",
  },
  icons: {
    icon: "/heart.png",
    shortcut: "/heart.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
