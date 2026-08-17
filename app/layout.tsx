import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvin & Aida — In Loving Memory",
  description:
    "In loving memory of Arvin Morattab and Aida Farzaneh, among the 176 people killed when Flight PS752 was shot down on January 8, 2020.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Manrope:wght@400;500;600;700&family=Vazirmatn:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
