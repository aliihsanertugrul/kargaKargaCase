import { Inter } from "next/font/google";
import "./globals.css";
import Messenger from "@/components/common/messenger";
import Script from "next/script";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen ${inter.className}`}>
        <Suspense>
          <main>{children}</main>
          <Messenger />
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
            strategy="beforeInteractive"
          />
        </Suspense>
      </body>
    </html>
  );
}
