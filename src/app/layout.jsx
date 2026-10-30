
import StoreProvider from "@/redux/StoreProvider"


import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tic Tac Toe",
  description: "Play Tic Tac Toe with a friend or computer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
