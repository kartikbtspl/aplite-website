import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MouseEffects } from "@/components/layout/mouse-effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aplite - Pay the right business, every time",
  description: "Instant access to verified business banking information — protect against fraud and errors.",
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
        
        {/* Mouse hover effects */}
        <MouseEffects />
        
        {/* Your actual content */}
        <Header />
        <main className="px-10 py-12 md:py-16 relative z-10">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}