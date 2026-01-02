import { useState, type FC } from "react";
import { MainHeader } from "./MainHeader";
import { Navbar } from "./Navbar";
import { WeddingsList } from "./WeddingsList";

export const Homepage: FC = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  // lock scroll when !showHeader

  return (
    <div className="homepage">
      <Navbar visible={showHeader} />
      <MainHeader
        visibleHeader={showHeader}
        setHeaderVisible={() => setShowHeader(true)}
      />
      <WeddingsList />
    </div>
  );
};
