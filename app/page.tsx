import Image from "next/image";
import Navbar from "./landing/components/navbar/navbar";
import Hero from "./landing/components/main/hero";
import Footer from "./landing/components/footer/Footer";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
