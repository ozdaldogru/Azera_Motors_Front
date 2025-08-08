import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azera Motors",
  description: "Azera Motors Car Dealer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZD6CDE1XEZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZD6CDE1XEZ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <div className="w-full gap-4">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}