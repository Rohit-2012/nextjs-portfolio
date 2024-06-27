import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";

const socials = [
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/rohit-kirti2012",
  },
  {
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/rohit-2012",
  },
  {
    icon: <BiLogoGmail className="w-5 h-5" />,
    link: "mailto:rohit.kirti1219@gmail.com",
  },
];

const Socials = () => {
    return (
        <div className="flex items-center flex-wrap gap-3">
            {socials.map((social, i) => (
                <Button key={i} link={social.link} isIcon>
                    <span className="w-7 h-7 grid place-items-center">{ social.icon}</span>
                </Button>
            ))}
        </div>
    );
}

export default Socials;