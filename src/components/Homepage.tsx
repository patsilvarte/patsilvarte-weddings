import { useRef, type FC } from "react";
import { smoothScrollTo } from "../utils/smoothScrollTo";
import { useLock } from "../utils/useLock";
import { MainHeader } from "./MainHeader";
import { Navbar } from "./Navbar";
import { WeddingsList } from "./WeddingsList";

export const Homepage: FC = () => {
  const firstSection = useRef<HTMLDivElement | null>(null);
  const { unlock, isLocked } = useLock();

  const showWebsite = () => {
    unlock();
    const y = firstSection.current?.getBoundingClientRect().top ?? 0;
    smoothScrollTo(window.scrollY + y, 1500); // 1.2s duration
  };

  return (
    <div className="homepage" id="homepage">
      <Navbar visible={!isLocked} />
      <MainHeader visibleHeader={!isLocked} setHeaderVisible={showWebsite} />
      <WeddingsList ref={firstSection} isHomepage />
    </div>
  );
};
