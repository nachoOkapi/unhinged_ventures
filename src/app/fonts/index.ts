import localFont from "next/font/local";

export const ppMoriSemiBold = localFont({
  src: "../../../fonts/PPMori-Semibold.woff",
  variable: "--font-pp-mori-semibold",
});

export const junicodeBoldItalic = localFont({
  src: "../../../fonts/junicode-bolditalic-webfont.woff",
  variable: "--font-junicode-bold-italic",
});

export const geistSans = localFont({
  src: "../../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const chesterPro = localFont({
  src: "../../../fonts/BNChesterPro.woff",
  variable: "--font-chester-pro",
  weight: "400",
});
