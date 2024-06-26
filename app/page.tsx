"use client";

import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
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
          {/* <Landing /> */}
          <Work />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
