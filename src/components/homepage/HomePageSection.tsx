import type { FC } from "react";
import "./HomePageSection.scss";

interface HomePageSectionProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement> | undefined;
  darkBackground?: boolean;
}

export const HomePageSection: FC<HomePageSectionProps> = ({
  children,
  ref,
  darkBackground = false,
}) => {
  return (
    <div
      className={`homepage-section ${darkBackground ? "homepage-section--dark" : ""}`}
      ref={ref}
    >
      <div className="homepage-section__content">{children}</div>
    </div>
  );
};
