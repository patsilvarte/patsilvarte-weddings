import { useRef, type FC } from "react";
import { smoothScrollTo } from "../utils/smoothScrollTo";
import { useLock } from "../utils/useLock";
import { Contacts } from "./details/Contacts";
import { Footer } from "./general/Footer";
import { Navbar } from "./general/Navbar";
import { HomePageSection } from "./homepage/HomePageSection";
import { MainHeader } from "./homepage/MainHeader";
import { ReviewsSection } from "./homepage/ReviewsSection";
import { SobreSection } from "./homepage/SobreSection";
import { ServicesList } from "./ServicesList";
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
      <HomePageSection darkBackground ref={firstSection}>
        <ServicesList />
      </HomePageSection>
      <HomePageSection>
        <WeddingsList isHomepage />
      </HomePageSection>
      <HomePageSection darkBackground>
        <SobreSection />
      </HomePageSection>
      <HomePageSection>
        <ReviewsSection />
      </HomePageSection>
      <HomePageSection darkBackground>
        <Contacts />
      </HomePageSection>

      <Footer />
    </div>
  );
};
