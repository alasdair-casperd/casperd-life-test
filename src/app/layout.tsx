import type { Metadata } from "next";
import { Host_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Host_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Casperd Life Test",
  description: "How much of life have you experience so far?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfit.className}`}>{children}</body>
    </html>
  );
}
