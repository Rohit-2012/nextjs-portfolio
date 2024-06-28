import FancyButton from "@/components/ui/FancyButton";
import Profile from "@/components/ui/Profile";
import MagneticWrapper from "@/components/visualEffects/MagneticWrapper";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="w-full flex items-center justify-center md:justify-between">
            <Profile />
            <div className="hidden md:inline">
                {/* <MagneticWrapper>
                    <FancyButton text="Let's talk" icon={<FaArrowRight /> } />
                </MagneticWrapper> */}
            </div>
        </div>
    );
}

export default Header;