"use client";

import localFont from "@next/font/local";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import { HeaderProvider } from "@/app/components/Header/context/HeaderContext";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300"
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200"
    }
  ],
  variable: "--font-Recoleta-Black"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={poppins.className}>
    <HeaderProvider>
      <Header />
    </HeaderProvider>
    {children}
    </body>
    </html>
  );
}
