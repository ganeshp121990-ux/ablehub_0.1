import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AccessibilityPanel from "@/components/AccessibilityPanel";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbleHub | NDIS Community Support & Inclusive Care Australia",
  description:
    "AbleHub is an Australian NDIS community platform offering inclusive care, support services, and community engagement for people with disabilities.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "ULs0W6wtb9XyIQtUrb_vszc8lXWWQksHope7WwJ0Hck",
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
