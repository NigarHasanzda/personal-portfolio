import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
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
  title: "Nigar Hesenzade — Portfolio",
  description: "Personal portfolio and front-end work",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html  lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0c0806] antialiased font-sans text-zinc-100`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
