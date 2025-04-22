import AboutUs from "@/components/About";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";  // Changed import name
=======
import CyberpunkTimeline from "@/components/TImeline";
>>>>>>> upstream/main
import Image from "next/image";

export default function Page() {  // Renamed function to avoid conflict
  return (
<<<<<<< HEAD
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#71225311] text-white bg-no-repeat w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />

    </div>
=======
    <>
      <CustomCursor />
      {/* put every thing below this  */}

      
      <CyberpunkTimeline />
      <AboutUs/>

      <Footer />


    </>
>>>>>>> upstream/main

  );
}