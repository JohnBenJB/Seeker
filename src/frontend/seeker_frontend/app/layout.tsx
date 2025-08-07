import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Seeker",
  description: "A decentralized search engine, built for the open internet",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${tektur.variable} antialiased dark`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${tektur.variable} antialiased`}>{children}</body>
    </html>
  );
}
