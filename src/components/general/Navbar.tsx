import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patsilvarteLogoWideWhite from "../../assets/Patsilvarte_logo_horizontal_white.svg";
import { Button } from "./Button";

import "./Navbar.scss";

interface NavbarProps {
  visible?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ visible = true }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setMobileOpen(false);
  };

  const goTo = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <div className={`navbar navbar--${visible ? "visible" : "invisible"}`}>
      <div className="navbar__container">
        {/* Mobile hamburger */}
        <div className="navbar__mobile-toggle">
          {mobileOpen ? (
            <CloseIcon onClick={() => setMobileOpen(false)} />
          ) : (
            <MenuIcon onClick={() => setMobileOpen(true)} />
          )}
        </div>

        {/* Desktop Left */}
        <div className="navbar__left">
          <Button variant="navigation" onClick={() => goTo("/casamentos")}>
            Casamentos
          </Button>
          <Button variant="navigation" onClick={() => goTo("/servicos")}>
            Serviços
          </Button>
        </div>

        <img
          onClick={goToHome}
          className="navbar__logo"
          src={patsilvarteLogoWideWhite}
        />

        {/* Desktop Right */}
        <div className="navbar__right">
          <Button variant="navigation" onClick={() => goTo("/contactos")}>
            Contactos
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-menu">
          <Button variant="navigation" onClick={() => goTo("/")}>
            Início
          </Button>
          <Button variant="navigation" onClick={() => goTo("/casamentos")}>
            Casamentos
          </Button>
          <Button variant="navigation" onClick={() => goTo("/servicos")}>
            Serviços
          </Button>
          <Button variant="navigation" onClick={() => goTo("/contactos")}>
            Contactos
          </Button>
        </div>
      )}
    </div>
  );
};
