import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Barber",
  description: "Um app de agendamento de barbearia para seu negócio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} dark flex flex-col h-full`}>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
