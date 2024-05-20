import type { Metadata } from "next";
import "@/public/styles/destyle.css"
import "@/public/styles/global.scss"
import Header from "@/public/components/header/Header";
import Footer from "@/public/components/footer/Footer";
import Sidebar from "@/public/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "RSS reader",
  description: "ワタシのワタシによるワタシのためのRSSリーダー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" id="html">
      <body>
        <Header />
        <div className="l-inner">
          <main>
            {children}
          </main>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
