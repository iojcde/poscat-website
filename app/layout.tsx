import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "POSCAT — Algorithm & AI at POSTECH",
  description:
    "POSCAT is the algorithm and AI community at POSTECH, built around deep problem solving, research curiosity, and collaborative growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className="antialiased"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
