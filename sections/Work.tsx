import WorkCard from "@/components/cards/work/WorkCard";
import ExpandableCards from "@/components/expandables/ExpandableCards";
import Heading from "@/components/heading/Heading";
import { workData } from "@/data";

const MainWork = workData[0];

const Work = () => {
  return (
    <div className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />
      {/* Main Featured card */}
      <WorkCard
        active
        title={MainWork.title}
        tag={MainWork.tag}
        video={MainWork.video}
        link={MainWork.link}
      />
      <div className="mt-24">
        <ExpandableCards />
      </div>
    </div>
  );
};

export default Work;
