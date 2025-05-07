import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "./_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

// export const metadata = {
//   title: "Easy Room",
//   description: "Easy room booking system",
// };

export const metadata = {
  title: {
    default: "Easy Room",
    template: "%s | Easy Room",
  },
  description: "Easy room booking system",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${josefin.className} antialiased min-h-screen text-gray-100 bg-primary-950 flex flex-col`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
