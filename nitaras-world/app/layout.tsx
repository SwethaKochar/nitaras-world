import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nitara's World",
  description: "A little corner of the internet filled with Nitara's adventures, creations, holidays and favorite things."
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}