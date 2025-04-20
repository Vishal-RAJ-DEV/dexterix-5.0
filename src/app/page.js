import AboutUs from "@/components/About";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import CyberpunkTimeline from "@/components/TImeline";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CustomCursor />
      {/* put every thing below this  */}

      
      <CyberpunkTimeline />
      <AboutUs/>

      <Footer />


    </>

  );
}
