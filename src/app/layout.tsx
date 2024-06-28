import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Tesla | Shop",
  description: "Ecommerce de tesla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
