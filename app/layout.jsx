
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import './styles/menu.css';
import Head from 'next/head';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hawaii Barbershop",
  description: "Where Style Meets Aloha",
  // icons: {
  //   icon: '/favicon.ico',  // Try using PNG
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <Head>
           <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              {children}
            </body>
          </html>
          );
}
