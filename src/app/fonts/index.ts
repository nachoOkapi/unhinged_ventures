import localFont from "next/font/local";

export const ppMoriSemiBold = localFont({
  src: [{
    path: './files/PPMori-Semibold.woff',
    weight: '600',
    style: 'normal',
  }],
  variable: "--font-pp-mori-semibold",
});

export const junicodeBoldItalic = localFont({
  src: [{
    path: './files/junicode-bolditalic-webfont.woff',
    weight: '700',
    style: 'italic',
  }],
  variable: "--font-junicode-bold-italic",
});

export const geistSans = localFont({
  src: [{
    path: './files/GeistVF.woff',
    weight: '100 900',
    style: 'normal',
  }],
  variable: "--font-geist-sans",
});

export const chesterPro = localFont({
  src: [{
    path: './files/BNChesterPro.woff',
    weight: '400',
    style: 'normal',
  }],
  variable: "--font-chester-pro",
});
