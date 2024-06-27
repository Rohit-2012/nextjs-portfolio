import { workData } from "@/data";
import WorkCard from "../cards/work/WorkCard";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ExpandableCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {workData.slice(1).map((work, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out", i === hoveredIndex ? "lg:w-[80%]" : "lg:w-[40%]"
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <WorkCard
            active={i === hoveredIndex}
            title={work.title}
            tag={work.tag}
            video={work.video}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableCards;
