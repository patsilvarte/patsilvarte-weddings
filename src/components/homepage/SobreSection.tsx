import { Typography } from "@mui/material";
import patsilvarteAboutmePhoto from "../../assets/Patsilvart_me_photo.png";
import "./SobreSection.scss";

export const SobreSection = () => {
  return (
    <div className="about-section">
      <div className="about-section__text">
        <Typography variant="h3" gutterBottom>
          Por detrás do Patsilvarte Weddings
        </Typography>
        <Typography variant="body1" gutterBottom>
          Olá! O meu nome é Patrícia Silva (agora também Fernandes), casei-me em
          2024 e agora ajudo outros noivos a concretizar o seu sonho através de
          serviços personalizados de papelaria e decoração.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Sou amante de trabalhos manuais desde que me lembro, de séries
          românticas que nos deixam a "chorar baba e ranho" e de adoro ajudar a
          resolver problemas.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Depois de criar toda a papelaria e decoração do meu próprio casamento,
          percebi que queria ajudar outros casais a viver o mesmo — um processo
          cuidado, próximo e pensado ao pormenor.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Assim nasceu o Patsilvarte Weddings, da vontade de transformar
          histórias reais em detalhes com significado.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aqui cada projeto é desenvolvido com tempo, intenção e uma atenção
          especial aos detalhes que fazem a diferença, para que tenhas o dia dos
          teus sonhos.
        </Typography>
      </div>
      <img
        alt="Patsilvarte Weddings founder Patricia Silva Fernandes"
        className="about-section__image"
        src={patsilvarteAboutmePhoto}
      />
    </div>
  );
};
