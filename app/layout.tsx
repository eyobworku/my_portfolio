import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // for use in tailwind.config.ts
});

export const metadata: Metadata = {
  title: "Portfolio | Software Engineer & Bot Developer",
  description:
    "Software Engineer specializing in Backend Development and Telegram Bots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* EmailJS script - place here or in a specific component if only used there */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          {`(function(){
             emailjs.init({publicKey: "${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}"}); // Replace with your EmailJS User ID
          })();`}
        </script>
      </head>
      <body
        className={`${inter.variable} font-inter bg-dark-blue-1 text-brand-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
