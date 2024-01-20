import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import AppProvider from "@/context";
import { Toaster } from "@/components/ui/toaster";
import HeaderWeb from "@/components/ui/header-web";

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Varos | Investir de forma mais inteligente.",
  description: "Investir de forma mais inteligente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={redHat.className}>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <HeaderWeb />
            {children}
            <Toaster />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
