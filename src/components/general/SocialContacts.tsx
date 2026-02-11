import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme";
import "./SocialContacts.scss";

interface SocialContactsProps {
  vertical?: boolean;
}

export const SocialContacts = ({ vertical }: SocialContactsProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={isMobile || vertical ? "column" : "row"}
      spacing={isMobile || vertical ? 1 : 4}
      alignItems={vertical && !isMobile ? "start" : "center"}
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
