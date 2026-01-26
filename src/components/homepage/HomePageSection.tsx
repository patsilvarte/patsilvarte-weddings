import type { FC } from "react";
import "./HomePageSection.scss";

interface HomePageSectionProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement> | undefined;
}

export const HomePageSection: FC<HomePageSectionProps> = ({
  children,
  ref,
}) => {
  return (
    <div className="homepage-section" ref={ref}>
      {children}
    </div>
  );
};
