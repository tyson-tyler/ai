import type { Metadata } from "next";

import Footer from "./components/Footer";
import Sidebar from "./components/sidebar";
import Topbar from "./components/Topbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className="">
          <Topbar />
          <div className="flex">
            <div className="hidden md:flex bg-white border-r-2 pt-6 border-gray-800  w-[6%] ">
              <Sidebar />
            </div>
            <div className="mx-4 p-4 w-full ">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
