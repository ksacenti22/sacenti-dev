import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Keith Sacenti",
  description: "Product leader in cloud security. Writing about tech, data, and the art of iteration.",
  icons: {
    icon: "/pineapple.PNG",
    apple: "/pineapple.PNG",
  },
  openGraph: {
    title: "Keith Sacenti",
    description: "Product leader in cloud security. Writing about tech, data, and the art of iteration.",
    url: "https://sacenti.dev",
    siteName: "sacenti.dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  );
}
