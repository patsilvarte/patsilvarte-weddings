import type { FC } from "react";
import { Navbar } from "./Navbar";
import "./PageLayout.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      {children}
    </div>
  );
};
