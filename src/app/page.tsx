import HeroSection from "@/components/heroSection/herosection";
import Navbar from "@/components/navbar/navbar";
import Service from "@/components/service/service";
import VideoSection from "@/components/video/video";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection/>
      <Service/>
      <VideoSection/>

    </div>
  );
}
