import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Bloom Palette | Toko Bunga Elegan",
  description: "Platform Penjualan Bunga Modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Navbar muncul di atas setiap halaman */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}