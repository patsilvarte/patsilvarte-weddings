import { useEffect, useRef, useState, type FC } from "react";
import { useScrollLock } from "usehooks-ts";
import { smoothScrollTo } from "../utils/smoothScrollTo";
import { MainHeader } from "./MainHeader";
import { Navbar } from "./Navbar";
import { WeddingsList } from "./WeddingsList";

export const Homepage: FC = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const firstSection = useRef<HTMLDivElement | null>(null);
  const { unlock } = useScrollLock();

  const showWebsite = () => {
    setShowHeader(true);
    unlock();
    const y = firstSection.current?.getBoundingClientRect().top ?? 0;
    smoothScrollTo(window.scrollY + y, 1500); // 1.2s duration
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage" id="homepage">
      <Navbar visible={showHeader} />
      <MainHeader visibleHeader={showHeader} setHeaderVisible={showWebsite} />
      <WeddingsList ref={firstSection} isHomepage />
    </div>
  );
};
