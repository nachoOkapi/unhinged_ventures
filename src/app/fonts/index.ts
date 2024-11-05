import localFont from "next/font/local";

export const junicodeBoldItalic = localFont({
  src: './files/junicode-bolditalic-webfont.woff',
  variable: "--font-junicode-bold-italic",
  weight: '700',
  style: 'italic',
});

export const geistSans = localFont({
  src: './files/GeistVF.woff',
  variable: "--font-geist-sans",
  weight: '100 900',
  style: 'normal',
});

export const chesterPro = localFont({
  src: './files/BNChesterPro.woff',
  variable: "--font-chester-pro",
  weight: '400',
  style: 'normal',
});
