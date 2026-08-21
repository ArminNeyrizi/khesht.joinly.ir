import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "خشت آکادمی | آموزش صنعت ساختمان",
  description: "آموزش تخصصی و کاربردی صنعت ساختمان",
};

const kook = localFont({
  src: [
    {
      path: "../public/Font/Kook-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/Font/Kook-Medium.ttf",
      weight: "500",
      style: "normal",
    },

    {
      path: "../public/Font/Kook-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../public/Font/Kook-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },

    {
      path: "../public/Font/Kook-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../public/Font/Kook-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],

  variable: "--font-kook",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={kook.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
