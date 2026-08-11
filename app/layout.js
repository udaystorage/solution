import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';
import OrganizationSchema from "./components/seo/OrganizationSchema";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta', // This links the font to a CSS variable
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Lead Wala",
//   description: "Premium B2B and B2C Database Provider",
// };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col">
        <OrganizationSchema/>
        <Navbar/>

        {children}

      <Footer/>
        </body>
    </html>
  );
}
