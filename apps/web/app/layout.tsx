import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
// import { Providers } from "@workspace/web/components/providers";
import { Providers } from "../components/providers.js";
// Only works if we import it as .js but it auto imports as .jsx

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans"
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
