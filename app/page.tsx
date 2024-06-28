"use client";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import Work from "@/sections/Work";
import dynamic from "next/dynamic";


// Dynamic import WaterWaveWrapper to ensure it's only used in the client-side environment
const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/WaterWaveWrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <Landing />
          <Work />
          <About />
          <Contact />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
