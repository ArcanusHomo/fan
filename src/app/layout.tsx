import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "安徽老薛饭店 - 山野本味 · 皖南家常",
    template: "%s | 安徽老薛饭店",
  },
  description:
    "位于上海市松江区九亭镇的安徽家常菜馆，专注徽菜山里农家味。招牌菜：徽州臭鳜鱼、问政山笋、皖南刀板香、毛豆腐。",
  keywords: ["安徽菜", "徽菜", "老薛饭店", "九亭", "家常菜", "臭鳜鱼"],
  openGraph: {
    title: "安徽老薛饭店 - 山野本味 · 皖南家常",
    description: "始于九亭街巷，专注安徽山里农家味，柴火气、土酱香，不做改良。",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-cream text-forest font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
