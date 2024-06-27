import BackgroundCard from "@/components/cards/Background";
import Certification from "@/components/cards/Certification";
import Education from "@/components/cards/Education";
import Experience from "@/components/cards/Experience";
import Me from "@/components/cards/Me";
import Resume from "@/components/cards/Resume";
import StackCard from "@/components/cards/StackCard";
import Heading from "@/components/heading/Heading";
import Card from "@/components/ui/Card";
import Gallery from '@/components/ui/Gallery'



const About = () => {
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading number="02" title_1="About" title_2="Me" />
            <div className="space-y-4 py-8">
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    {/* ME card */}
                    <Me />
                    <Resume />
                    <BackgroundCard />
                    <div className="2xl:hidden">
                        <Gallery />
                    </div>
                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 ms:space-y-0 2xl:grid-cols-3">
                    <div className="space-y-4">
                    <Certification />
                    </div>
                    <div className="space-y-4">
                    <StackCard />
                    <Experience />
                    <Education />
                    </div>
                    <div className="hidden 2xl:flex">
                    <Gallery />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;