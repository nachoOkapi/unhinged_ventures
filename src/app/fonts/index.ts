import localFont from "next/font/local";

export const ppMoriSemiBold = localFont({
  src: '../../public/fonts/PPMori-Semibold.woff',
  variable: "--font-pp-mori-semibold",
  weight: '600',
  style: 'normal',
});

export const junicodeBoldItalic = localFont({
  src: '../../public/fonts/junicode-bolditalic-webfont.woff',
  variable: "--font-junicode-bold-italic",
  weight: '700',
  style: 'italic',
});

export const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: "--font-geist-sans",
  weight: '100 900',
  style: 'normal',
});

export const chesterPro = localFont({
  src: '../../public/fonts/BNChesterPro.woff',
  variable: "--font-chester-pro",
  weight: '400',
  style: 'normal',
});
