import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton, Stack, Typography } from "@mui/material";
import "./SocialContacts.scss";

export const SocialContacts = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="center" className="socials">
      <IconButton
        component="a"
        href={"https://www.instagram.com/patsilvarte.weddings/"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="socials__button"
        disableRipple
      >
        <InstagramIcon fontSize="medium" />
        <Typography variant="body1" align="center">
          @patsilvarte.weddings
        </Typography>
      </IconButton>

      <IconButton
        component="a"
        href="mailto:patsilvarte.weddings.info@gmail.com"
        aria-label="Enviar email"
        className="socials__button"
        disableRipple
      >
        <EmailIcon fontSize="medium" />
        <Typography variant="body1" align="center">
          patsilvarte.weddings.info@gmail.com
        </Typography>
      </IconButton>
    </Stack>
  );
};
