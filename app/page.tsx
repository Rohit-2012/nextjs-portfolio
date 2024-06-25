"use client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FancyButton from "@/components/ui/FancyButton";
import Input from "@/components/ui/Input";
import LiveClock from "@/components/ui/LiveClock";
import Profile from "@/components/ui/Profile";
import ScrollDown from "@/components/ui/ScrollDown";
import TextArea from "@/components/ui/TextArea";
import MagneticWrapper from "@/components/visualEffects/MagneticWrapper";
import WaterWaveWrapper from "@/components/visualEffects/WaterWaveWrapper";
import { BiUserCircle } from "react-icons/bi";
import { CgPassword } from "react-icons/cg";
import { FaArrowRight, FaUser } from "react-icons/fa";
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
              <Input type="text" placeholder="Full name" />
              <Input
                type="password"
                placeholder="Enter password"
                icon={<CgPassword />}
              />
              <TextArea icon={<BiUserCircle />} placeholder="Enter your text" />
              <Profile />
              <MagneticWrapper className="w-[350px]">
                <FancyButton text="Contact us" icon={<FaArrowRight />} />
              </MagneticWrapper>
              <LiveClock timeZone="Africa/Casablanca" />
              <MagneticWrapper>
                <ScrollDown />
              </MagneticWrapper>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
