import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MovingCircles } from "@/components/ui/MovingCircles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplite - Pay the right business, every time",
  description:
    "Instant access to verified business banking information — protect against fraud and errors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Subtle water surface effect */}
        <div className="water-surface"></div>

        {/* Subtle continuous ripples without borders */}
        <div className="continuous-ripple"></div>
        <div className="continuous-ripple"></div>
        <div className="continuous-ripple"></div>
        <div className="continuous-ripple"></div>

        {/* Background glow layers */}
        <div className="glow-layer"></div>

        {/* Moving circles */}
        <MovingCircles color="rgba(0, 0, 0, 0.15)" count={8} />

        {/* Your actual content */}
        <Header />
        <main className="py-12 md:py-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
