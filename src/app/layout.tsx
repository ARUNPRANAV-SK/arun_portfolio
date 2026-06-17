import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Arun Pranav SK | Electronics & Communication Engineering Student",
  description:
    "Professional portfolio of Arun Pranav SK, an Electronics and Communication Engineering student. Passionate about embedded systems, IoT, antenna design (Ansys HFSS), and Raspberry Pi projects.",
  keywords: [
    "Arun Pranav SK",
    "Electronics and Communication Engineering",
    "ECE Portfolio",
    "Embedded Systems",
    "IoT Developer",
    "Antenna Design",
    "Ansys HFSS",
    "Raspberry Pi Enthusiast",
    "MATLAB",
    "Solidworks",
    "Tirupur",
    "Tamil Nadu"
  ],
  authors: [{ name: "Arun Pranav SK" }],
  openGraph: {
    title: "Arun Pranav SK | ECE & IoT Portfolio",
    description:
      "Electronics & Communication Engineering student passionate about emerging technologies, embedded systems, antenna design, and IoT development.",
    url: "https://arun-portfolio-three.vercel.app", // a friendly placeholder based on name
    siteName: "Arun Pranav SK Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arun Pranav SK Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Pranav SK | ECE & IoT Portfolio",
    description:
      "Electronics & Communication Engineering student passionate about emerging technologies, embedded systems, antenna design, and IoT development.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-dark-bg text-gray-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
