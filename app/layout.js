import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ 
  weight: ['300', '400', '500'],
  subsets: ["latin"]
 });

export const metadata = {
  title: "Welcome To TotalCareEurope",
  description: "TotalCareEurope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
