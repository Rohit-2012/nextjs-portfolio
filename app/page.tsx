"use client";

import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Landing from "@/sections/Landing";
import Work from "@/sections/Work";


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
