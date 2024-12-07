import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SendAI",
  description: "Accelerating the Solana AI Ecosystem",
  metadataBase: new URL('https://sendai.fun'),
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "SendAI",
    description: "Accelerating the Solana AI Ecosystem",
    siteName: "SendAI",
    images: [{
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "SendAI - Accelerating the Solana AI Ecosystem"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SendAI",
    description: "Accelerating the Solana AI Ecosystem",
    images: ["/og.png"],
    creator: "@sendaifun",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
