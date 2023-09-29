import { AppWrapper } from "@/components/AppWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xela Oladipupo",
  description:
    "Portfolio website, Xela, Oladipupo, Gideon, Ajiboye, React, Typescript",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: ["/favicon-16x16.png", "/favicon-32x32.png"],
  },
  manifest: "/site.webmanifest",
  themeColor: "#F1FAEE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary scrollbar-w-2 dark:bg-dark-primary scrollbar scrollbar-thumb-dark-primary dark:scrollbar-thumb-primary dark:scrollbar-track-dark-primary scrollbar-thumb-rounded-lg`}>
        <main>
          <AppWrapper>{children}</AppWrapper>
        </main>
      </body>
    </html>
  );
}
