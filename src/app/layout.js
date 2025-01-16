import { Geist } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Mindcraft - AI Agents for Minecraft",
  description: "Open-source project implementing AI agents that can interact with players and the Minecraft environment.",
  icons: {
    icon: '/favicon_SFD_icon.ico',
    shortcut: '/favicon_SFD_icon.ico',
    apple: '/favicon_SFD_icon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Mindcraft - AI Agents for Minecraft',
    description: 'Open-source project implementing AI agents that can interact with players and the Minecraft environment.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mindcraft.ai',
    siteName: 'Mindcraft',
    images: [
      {
        url: '/mindcraft-background.png',
        width: 1200,
        height: 630,
        alt: 'Mindcraft - AI Agents for Minecraft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindcraft - AI Agents for Minecraft',
    description: 'Open-source project implementing AI agents that can interact with players and the Minecraft environment.',
    images: ['/mindcraft-background.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
