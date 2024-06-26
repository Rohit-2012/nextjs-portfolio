"use client";

import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import Landing from "@/sections/Landing";


export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div>
            <Landing />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
