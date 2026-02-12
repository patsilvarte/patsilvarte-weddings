import { Typography, useMediaQuery } from "@mui/material";
import "./Footer.scss";
import { SocialContacts } from "./SocialContacts";

export const Footer = () => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <footer className="footer">
      <div className="footer__container">
        <Typography variant="subtitle1" align={isMobile ? "center" : "left"}>
          Contactos
        </Typography>
        <SocialContacts vertical />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Patsilvarte Weddings. Todos os direitos
          reservados.
        </Typography>
      </div>
    </footer>
  );
};
