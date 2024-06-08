import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Footer } from "@/components/ui/footer";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lambda Assistant",
  description: "Web app with ai for utilities and assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("flex flex-col justify-between min-h-screen dark bg-background text-[#F4F4F4] font-sans antialiased", fontSans.variable)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
