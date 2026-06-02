import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


export const metadata = {
  title: "Justdial Clone",
  description: "A Justdial Clone built using Next.js, featuring business listings, reviews, profiles, and modern UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Header />
        {children}
      </body>
    </html>
  );
}
