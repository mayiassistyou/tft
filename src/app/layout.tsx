import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import Container from "@/components/container";
import Footer from "@/components/footer";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teamfight Tactics",
  description: "Teamfight Tactics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sofia.className} bg-gray-800 text-gray-400
        font-medium min-h-screen flex flex-col`}
      >
        <Header />
        <div className="grow">
          <Container>{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
