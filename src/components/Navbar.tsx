import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import patsilvarteLogoWideWhite from "../assets/Patsilvarte_logo_horizontal_white.svg";
import { Button } from "./general/Button";
import "./Navbar.scss";

interface NavbarProps {
  visible?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ visible = true }) => {
  const navigate = useNavigate();

  return (
    <div className={`navbar navbar--${visible ? "visible" : "invisible"}`}>
      <div className="navbar__container">
        <div className="navbar__left">
          <Button variant="navigation" onClick={() => navigate("/casamentos")}>
            Casamentos
          </Button>
          <Button variant="navigation">Serviços</Button>
        </div>
        <img
          onClick={() => navigate("/")}
          className="navbar__logo"
          src={patsilvarteLogoWideWhite}
        />
        <div className="navbar__right">
          <Button variant="navigation">Contactos</Button>
        </div>
      </div>
    </div>
  );
};
