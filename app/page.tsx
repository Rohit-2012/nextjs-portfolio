"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Card title">
              <div className="grid grid-cols-4">
                <Button>Basic button</Button>
                <Button>
                  <GoHomeFill />
                  Basic button
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com">Google</Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
