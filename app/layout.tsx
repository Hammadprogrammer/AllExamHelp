import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/share-component/navbar/navbar";
import Footer from "@/share-component/footer/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hire Class Buddy",
  description: "Get expert assistance for your classes and assignments with Hire Class Buddy.",
  // Client ka Google Search Console verification code
  verification: {
    google: "NjsN1R8i6zRwFRZ1nji4enhGyduvbPwOAWKLT7UZ6xk",
  },
  alternates: {
    canonical: "https://hireclassbuddy.com",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hireclassbuddy.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69dd78add113861c2e2d76dc/1jm4hupmi';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}