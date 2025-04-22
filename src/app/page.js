import AboutUs from "@/components/About";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";  // Changed import name
import CyberpunkTimeline from "@/components/TImeline";
import Image from "next/image";

export default function Page() {  // Renamed function to avoid conflict
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#71225311] text-white bg-no-repeat w-full overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
        
      <CyberpunkTimeline />
      <AboutUs/>
      <Footer />

    </div>
    

  );
}