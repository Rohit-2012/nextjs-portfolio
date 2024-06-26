import { FC } from "react";

interface HeadingProps {
  title: string;
  tag: string;
}

const Heading: FC<HeadingProps> = ({ title, tag }) => {
  return (
      <div className="bg-secondary-background flex flex-none flex-nowrap relative p-6 w-full items-center justify-between h-16 border border-border rounded-3xl">
          {/* Title */}
      <div>
        <p className="text-lg font-medium leading-3 text-primary-foreground">
          {title}
        </p>
          </div>
          {/* Tag */}
          <div>
        <p className="text-lg font-medium leading-3 font-pixel1 text-secondary-foreground">
          {tag}
        </p>
          </div>
    </div>
  );
};

export default Heading;
