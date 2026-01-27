import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, Stack, Typography } from "@mui/material";
import "./SocialContacts.scss";

interface SocialContactsProps {
  vertical?: boolean;
}

export const SocialContacts = ({ vertical }: SocialContactsProps) => {
  return (
    <Stack
      direction={vertical ? "column" : "row"}
      spacing={vertical ? 1 : 4}
      alignItems={vertical ? "start" : "center"}
      className="socials"
    >
      <Link
        component="a"
        href={"https://www.instagram.com/patsilvarte.weddings/"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="socials__button"
        underline="hover"
        color="inherit"
      >
        <InstagramIcon fontSize="small" />
        <Typography variant="body2" align="center">
          @patsilvarte.weddings
        </Typography>
      </Link>

      <Link
        component="a"
        href="mailto:patsilvarte.weddings.info@gmail.com"
        aria-label="Enviar email"
        className="socials__button"
        underline="hover"
        color="inherit"
      >
        <EmailIcon fontSize="small" />
        <Typography variant="body2" align="center">
          patsilvarte.weddings.info@gmail.com
        </Typography>
      </Link>
    </Stack>
  );
};
