import type { Metadata } from "next";
import "@/public/styles/destyle.css"
import "@/public/styles/global.scss"

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
        <div className="l-inner">
          {children}
        </div>
      </body>
    </html>
  );
}
