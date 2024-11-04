import { Metadata } from "next";
import "./globals.css";
import {
  ppMoriSemiBold,
  junicodeBoldItalic,
  geistSans,
} from "./fonts/index";

export const metadata: Metadata = {
  title: "Unhinged Ventures",
  description: "A good idea is a good idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${ppMoriSemiBold.variable}
          ${junicodeBoldItalic.variable}
          ${geistSans.variable}
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
