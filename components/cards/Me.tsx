import Image from "next/image";
import Card from "../ui/Card";
import MyImg from "@/public/assets/images/gallery/img-4.jpeg";
import { cn } from "@/lib/utils";

const Me = () => {
  return (
    <Card className="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        {/* Background image */}
        <Image
          src={MyImg}
          alt="Rohit Kirti"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
          priority
        />
        {/* Tags */}
              <div className="absolute top-[65%] space-y-2">
                  <Tag text="Hello, visitor 🙋🏻‍♂️" className="rounded-2xl"/>
                  <Tag text="I am ROHIT KIRTI" className="rounded-2xl"/>
                  <Tag text="Web Developer" className="rounded-2xl"/>
        </div>
      </div>
    </Card>
  );
};

const Tag = ({ text, className }: { text: string; className: string }) => {
  return (
    <div className={cn('bg-black/[0.7] w-fit py-1.5 px-3', className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">
        {text}
      </p>
    </div>
  );
};

export default Me;
