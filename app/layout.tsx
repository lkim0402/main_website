import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
// const inter = Inter({
//   subsets: ["latin"],
// });

// import "highlight.js/styles/github.css";

export const metadata: Metadata = {
  title: "leejunkim",
  description: "Personal notes",
  icons: {
    icon: "/favicon1.png", // Or specify a PNG file like /favicon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL} />
      </Head>
      <meta
        name="google-site-verification"
        content="o_7CxN7gSSBek2bzrce1_LKa5Y7YeDCFZH2rff2sNZw"
      />
      <GoogleAnalytics gaId="G-VEJVKJLKK7" />

      <body>
        <div className=" pt-0.5 pb-0.5 bg-blue-100 mb-10">
          <Header />
        </div>
        <div className="mt-5 md:w-7/12 flex flex-col mx-auto text-md children">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
