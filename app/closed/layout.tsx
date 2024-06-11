import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hologarde's Website",
  description: "Website currently under construction",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="inter.className bg-[url('/hologarde_background.jpg')] bg-cover	bg-no-repeat bg-center">
        {children}
      </body>
    </html> 
  );
}
