import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeButton from "@/components/Theme/ThemeButton";
import { ThemeContextProvider } from "@/components/Theme/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollContextProvider } from "@/components/ScrollContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Tiwari | Portfolio",
  description:
    "🌟 I'm Ayush Tiwari, a full stack developer that specializes in NextJs, Javascript, TypeScript and the MERN stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <ScrollContextProvider>
          <body
            className={`${outfit.className} scroll-smooth bg-primary antialiased dark:bg-gray-400 transition-all ease-in-out duration-300 scrollbar-thin scrollbar-thumb-gray-700 dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-500 scrollbar-thumb-rounded-md scrollbar-track-gray-400 `}
          >
            <Header />
            <div className="relative pt-24 min-h-screen flex flex-col flex-1">
              {children}
              <ThemeButton />
              <Footer />
            </div>
          </body>
        </ScrollContextProvider>
      </ThemeContextProvider>
    </html>
  );
}
