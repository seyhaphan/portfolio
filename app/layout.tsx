import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Java Developer Portfolio | Full-Stack Developer',
  description: 'Full-Stack Java Developer specializing in Spring Boot, Next.js, and AI integration. Available for enterprise projects.',
  keywords: 'Java Developer, Spring Boot, Next.js, Full-Stack, React, TypeScript, AI, RAG',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Java Developer Portfolio',
    description: 'Full-Stack Java Developer specializing in Spring Boot & Next.js',
    siteName: 'Java Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Java Developer Portfolio',
    description: 'Full-Stack Java Developer specializing in Spring Boot & Next.js',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className="font-mono bg-gray-900">
        <Navbar />
        {children}
        </body>
    </html>
  );
}
