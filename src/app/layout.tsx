import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Este é o blog com NextJS",
  description: "Este é o meu blog criado com NextJS",
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
