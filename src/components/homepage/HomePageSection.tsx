import type { FC } from "react";
import "./HomePageSection.scss";

interface HomePageSectionProps {
  children: React.ReactNode;
}

export const HomePageSection: FC<HomePageSectionProps> = ({ children }) => {
  return <div className="homepage-section">{children}</div>;
};
