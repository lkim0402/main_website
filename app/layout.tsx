import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideProfile } from "../components/SideProfile";

import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "leejunkim",
  description: "Personal notes",
  icons: {
    icon: "/favicon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dm_sans.className} dark`} suppressHydrationWarning>
      <head>
        {/* Verification Script */}
        <meta
          name="google-site-verification"
          content="o_7CxN7gSSBek2bzrce1_LKa5Y7YeDCFZH2rff2sNZw"
        />
      </head>

      <GoogleAnalytics gaId="G-VEJVKJLKK7" />

      <body className="flex h-screen flex-col overflow-hidden bg-[#232338] text-[#fffdf7]">
        <div className="pt-0.5 pb-0.5">
          <Header />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-row items-start justify-center overflow-hidden px-4 md:mt-12 md:gap-10">
          <div className="hidden md:block">
            <SideProfile />
          </div>

          <div className="text-md children flex h-full w-full flex-col overflow-y-auto md:w-10/12 [scrollbar-width:none]">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
