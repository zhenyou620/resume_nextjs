import type { Metadata } from 'next';
import './globals.css';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mayu's Pase",
  icons: {
    icon: [
      'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>👩🏻‍💻</text></svg>',
      'https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/72x72/1f469-1f3fb-200d-1f4bb.png',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans`}>
        <Script
          src="https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js"
          crossOrigin="anonymous"
        ></Script>
        {children}
      </body>
    </html>
  );
}
