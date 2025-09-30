import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ahmed Farouk - Full-Stack Developer",
    template: "%s | Ahmed Farouk",
  },
  description:
    "Full-stack developer specializing in TypeScript, Next.js, and Firebase. Building modern, scalable web applications with exceptional user experiences.",
  keywords: [
    "full-stack developer",
    "TypeScript",
    "Next.js",
    "React",
    "Firebase",
    "web development",
    "Ahmed Farouk",
  ],
  authors: [{ name: "Ahmed Farouk" }],
  creator: "Ahmed Farouk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedfarouk.dev",
    title: "Ahmed Farouk - Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, Next.js, and Firebase.",
    siteName: "Ahmed Farouk Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Ahmed Farouk - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Farouk - Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, Next.js, and Firebase.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
