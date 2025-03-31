import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redwood K-Wellness",
  description: "Redwood K-Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
