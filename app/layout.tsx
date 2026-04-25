import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athlete AI — Your coaches talk to each other.",
  description:
    "Athlete AI gives you two personal coaches — nutrition and training — that share information in real time. Optimized for elite performance.",
  metadataBase: new URL('https://athlete-ai.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Athlete AI — Your coaches talk to each other.",
    description: "Personal nutrition and training coaches that share information in real time.",
    url: 'https://athlete-ai.tech',
    siteName: 'Athlete AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Athlete AI — Your coaches talk to each other.",
    description: "Personal nutrition and training coaches that share information in real time.",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const antiFlash = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.dataset.theme=t||(d?'dark':'light')}catch(e){}})()`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={spaceMono.variable}
      data-theme="dark"
      suppressHydrationWarning
    >
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
