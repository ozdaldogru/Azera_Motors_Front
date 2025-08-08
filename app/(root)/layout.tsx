
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Head from "next/head";


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

                <Head>
        <script async src={process.env.YOUR_GOOGLE_TAG_SCRIPT_URL}></script>
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
      </Head>

            {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
  
}
