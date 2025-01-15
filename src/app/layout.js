import { Geist } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mindcraft - AI Agents for Minecraft",
  description: "Open-source project implementing AI agents that can interact with players and the Minecraft environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.className} antialiased min-h-full w-full relative block`}>
        <Navbar />
        <div className="relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
