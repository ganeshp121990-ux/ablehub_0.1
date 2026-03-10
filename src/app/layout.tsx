import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AccessibilityPanel from "@/components/AccessibilityPanel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbleHub | Bridging Community Together",
  description: "A premium, accessible health-tech community platform.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <AccessibilityPanel />
      </body>
    </html>
  );
}
