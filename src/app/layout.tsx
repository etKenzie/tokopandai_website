import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Toko Pandai Nusantara - Inovasi Digital Untuk Pertumbuhan Bisnis Tanpa Batas",
  description:
    "Platform digital terintegrasi untuk menghubungkan pemangku kepentingan utama dan mendukung pertumbuhan bisnis ritel di Indonesia.",
  keywords: ["Tokopandai", "Digital Platform", "Bisnis Ritel", "Indonesia", "FMCG"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
