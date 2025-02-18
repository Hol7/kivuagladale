import HeroSection from "@/components/heroSection/herosection";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection/>
    </div>
  );
}
