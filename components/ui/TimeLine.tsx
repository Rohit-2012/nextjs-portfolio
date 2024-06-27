import Link from "next/link";
import { FC, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface TimeLineProps {
  children: ReactNode;
}

const TimeLine: FC<TimeLineProps> = ({ children }) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

/* TIMELINE ITEM COMPONENT */

interface TimeLineItemProps {
  date: string;
  title: string;
  subTitle: string;
  link?: string;
  tag?: string;
}
export const TimeLineItem: FC<TimeLineItemProps> = ({
  date,
  title,
  subTitle,
  link,
  tag,
}) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      {/* Timeline Date */}
      <div className="h-auto flex-none break-words whitespace-pre">
        <p className="text-secondary-foreground">{date}</p>
      </div>
      {/* Timeline Content */}
      <div className="flex gap-x-2">
        <div className="flex flex-col gap-0.5">
          {/* Title */}
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          {/* Subtitle */}
          <div className="flex items-center gap-2 w-min">
            {link ? (
              <Link href={link} target="_blank">
                <TimelineItemBody subTitle={subTitle} tag={tag} link={link} />
              </Link>
            ) : (
                <TimelineItemBody subTitle={subTitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* TIMELINE ITEM BODY */

interface TimelineItemBodyProps {
  subTitle: string;
  tag?: string;
  link?: string;
}

const TimelineItemBody: FC<TimelineItemBodyProps> = ({
  subTitle,
  tag,
  link,
}) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default TimeLine;
