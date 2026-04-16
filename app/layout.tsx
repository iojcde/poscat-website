import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "POSCAT — Algorithm & AI at POSTECH",
  description:
    "포항공과대학교의 유일무이 알고리즘 & 인공지능 동아리, POSCAT입니다.",
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
