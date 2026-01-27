import type { FC } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import "./PageLayout.scss";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="page-layout__content">{children}</div>
      <Footer />
    </div>
  );
};
