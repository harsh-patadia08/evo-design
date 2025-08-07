import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "./components/Header";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "admin dashboard",
  description: "Admin dashboard for managing events",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="h-screen w-full flex sm:p-2 selection:bg-[#FFB48C] selection:text-amber-50">
          <main className="mx-auto w-full sm:w-[1200px] p-2">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
