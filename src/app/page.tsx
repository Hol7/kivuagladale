import HeroSection from "@/components/heroSection/herosection";
import Navbar from "@/components/navbar/navbar";
import Products from "@/components/product/product";
import Service from "@/components/service/service";
import VideoSection from "@/components/video/video";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection/>
      <Service/>
      <VideoSection/>
      <Products/>

    </div>
  );
}
