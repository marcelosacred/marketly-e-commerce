import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/main-navbar";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400","700"] });

export const metadata: Metadata = {
  title: "Marketly | Smart E-Commerce Platform",
  description: "Revolutionize your online store with Marketly, the smart e-commerce platform designed to boost sales and enhance customer experience.",
  icons: {
    icon: "/logo-marketly.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>
        <MainNavbar />
        {children}</body>
    </html>
  );
}
  