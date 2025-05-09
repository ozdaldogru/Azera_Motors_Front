
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

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {

  return (
    <html lang="en">
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
