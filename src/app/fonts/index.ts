import localFont from "next/font/local";

export const ppMoriSemiBold = localFont({
  src: "./files/PPMori-Semibold.woff",
  variable: "--font-pp-mori-semibold",
});

export const junicodeBoldItalic = localFont({
  src: "./files/junicode-bolditalic-webfont.woff",
  variable: "--font-junicode-bold-italic",
});

export const geistSans = localFont({
  src: "./files/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const chesterPro = localFont({
  src: "./files/BNChesterPro.woff",
  variable: "--font-chester-pro",
  weight: "400",
});
