import { Inter } from "next/font/google";
import "./globals.css";
import Messenger from "@/components/common/messenger";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`h-screen ${inter.className}`}>
        <main>{children}</main>
        <Messenger/>
        </body>
    </html>
  );
}
