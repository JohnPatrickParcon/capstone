import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/navbar/NavBar";
import TanstackQueryProvider from "@/utils/tanstack/tanstackQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capstone Management System",
  description: "Capstone Management System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          <main className="w-full h-screen flex flex-col justify-center items-center bg-green-700">
          <NavBar/>
            {children}
          </main>
          <Toaster/>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
