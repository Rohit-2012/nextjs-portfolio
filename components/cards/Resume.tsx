import Image from "next/image";
import Card from "../ui/Card";
import signatureImg from '@/public/assets/images/signature/signature_white.png'
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/Socials";


const Resume = () => {
    return (
        <Card className="h-full">
            <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
            Welcome to my portfolio! I am a skilled web developer with expertise in HTML, CSS, JavaScript, TypeScript, React, NextJS, TailwindCSS, Material-UI, SASS/SCSS, NodeJS, Express, and MongoDB. Through various personal projects, I have demonstrated my ability to create dynamic, responsive web applications with both user-friendly interfaces and robust backend systems. Explore my portfolio to see my work and learn more about my journey. Let's create something amazing together!
            </p>
            {/* Signature */}
            <div>
                <Image src={signatureImg} alt="rohit kirti's signature" />
            </div>
            {/* Socials and resume button */}
            <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
                {/* Socials */}
                <Socials />
                <Button>
                    <FaDownload />
                    Resume
                </Button>
            </div>
        </Card>
    );
}

export default Resume;