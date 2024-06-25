import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import pixelFont1 from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/GrainEffect";
import Cursor from "@/components/cursor/Cursor";

// Fonts
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont1 = pixelFont1({
  src: "../public/assets/fonts/Pixellettersfull-BnJ5.ttf",
  variable: "--font-pixel-1",
});

// Meta Data
export const metadata: Metadata = {
  title: "ROHIT KIRTI",
  description: "Official portfolio of Rohit Kirti, created using Next JS v14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable, PixelFont1.variable)}>
        <GrainEffect />
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
