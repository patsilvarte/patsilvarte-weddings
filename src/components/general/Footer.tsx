import { Typography } from "@mui/material";
import "./Footer.scss";
import { SocialContacts } from "./SocialContacts";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Typography variant="subtitle1" align="left">
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
