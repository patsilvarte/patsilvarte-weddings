import { useState, type FC } from "react";
import { MainHeader } from "./MainHeader";
import { Navbar } from "./Navbar";

export const Homepage: FC = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);

  return (
    <div className="homepage">
      <Navbar visible={showHeader} />
      <MainHeader
        visibleHeader={showHeader}
        setHeaderVisible={() => setShowHeader(true)}
      />
      {/*
    // navbar que começa com height 0
    // div full screen com logo no meio e descrição do patsilvarte e seta no fim para iteração
    
    */}
    </div>
  );
};
