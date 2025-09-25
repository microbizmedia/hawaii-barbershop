
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/global.css";
import './styles/menu.css';
import Preloader from "../components/Preloader";

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
};

export default function RootLayout({ children,}: Readonly <{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Preloader />
        {children}
      </body>
    </html>
  );
}
