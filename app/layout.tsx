import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Nitara's World ✨",description:"Nitara's adventures, holidays, favorite things and magical dreams."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}