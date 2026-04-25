import type { Metadata } from "next";
import { Geist_Mono, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athlete AI — Your coaches talk to each other.",
  description:
    "Athlete AI gives you two personal coaches — nutrition and training — that share information in real time.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

const antiFlash = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.dataset.theme=t||(d?'dark':'light')}catch(e){}})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${spaceMono.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <title>Athlete AI — Your coaches talk to each other.</title>
      </head>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: antiFlash }}
        />
        {children}
      </body>
    </html>
  );
}
