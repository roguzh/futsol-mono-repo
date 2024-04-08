import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Belanosima } from "next/font/google";
import HeaderComponent from "./components/header";
import NavbarComponent from "./components/navbar";
import PreHeader from "./components/pre-header";

const belanosima = Belanosima({
  weight: "400",
  subsets: ["latin"],
});

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futsol Game",
  description:
    "Compete, win & earn. Solana's next-gen fantasy football game. Glory is one transfer away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={belanosima.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="text-white bg-primary">
        <HeaderComponent />
        <PreHeader />
        <div className=" grid grid-cols-12">
          <div className="  col-span-12 md:col-span-10">
            <div className={belanosima.className}>{children}</div>
          </div>

          <div className=" order-first md:order-last col-span-12 md:col-span-2">
            <NavbarComponent />
          </div>
        </div>
      </body>
    </html>
  );
}
