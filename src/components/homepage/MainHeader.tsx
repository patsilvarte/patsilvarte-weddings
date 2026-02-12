import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useMediaQuery } from "@mui/material";
import type { FC } from "react";
import patsilvarteLogoWideWhite from "../../assets/Patsilvarte_logo_horizontal_white.svg";
import patsilvarteFullLogoWideWhite from "../../assets/Patsilvarte_weddings_full_logo.png";
import photo_patricia_joao_b31 from "../../assets/patricia_joao/b_31.jpg";
import "./MainHeader.scss";

interface MainHeaderProps {
  visibleHeader: boolean;
  setHeaderVisible: () => void;
}

export const MainHeader: FC<MainHeaderProps> = ({
  setHeaderVisible,
  visibleHeader,
}) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <div className="main-header">
      <img
        alt="Patsilvarte Weddings - Papelaria e detalhes de casamento com identidade, intenção e elegância"
        className="main-header__background"
        src={photo_patricia_joao_b31}
      />
      <div className="main-header__overlay" />
      <div
        className={`main-header__content ${
          visibleHeader ? "main-header__content--spacer" : ""
        }`}
      >
        <img
          alt="Patsilvarte Weddings"
          className="main-header__logo"
          src={
            isMobile ? patsilvarteFullLogoWideWhite : patsilvarteLogoWideWhite
          }
        />
        <span className="main-header__headline">
          Papelaria e detalhes de casamento com identidade, intenção e elegância
        </span>
        {!visibleHeader && (
          <div className="main-header__show-more">
            <span className="main-header__show-more__hover-text">Ver mais</span>
            <ExpandCircleDownIcon
              fontSize="inherit"
              onClick={setHeaderVisible}
            />
          </div>
        )}
      </div>
    </div>
  );
};
