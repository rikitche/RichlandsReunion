import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Pacifico,
  Bebas_Neue,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue only has one weight
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Richlands High School Reunion | Class of 2013",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/wildcat.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/wildcat.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/wildcat.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      className={` ${poppins.variable} ${pacifico.variable} ${bebas.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
