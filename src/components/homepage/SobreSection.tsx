import { Typography, useMediaQuery } from "@mui/material";
import patsilvarteAboutmePhoto from "../../assets/Patsilvart_me_photo.png?w=320;480;768;1024;1600;2200&format=webp";
import { LazyImage } from "../general/LazyImage";
import { Title } from "../general/Title";
import "./SobreSection.scss";

export const SobreSection = () => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <div className="about-section">
      <div className="about-section__text">
        <Title title="Sobre" align={isMobile ? "center" : "left"} />
        {isMobile && (
          <LazyImage
            image={patsilvarteAboutmePhoto}
            alt="Patsilvarte Weddings founder Patricia Silva Fernandes"
            className="about-section__image"
          />
        )}
        <Typography variant="body1" gutterBottom>
          O Patsilvarte Weddings nasceu da vontade de transformar histórias
          reais em detalhes com significado.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Depois de criar toda a papelaria e decoração do meu próprio casamento,
          percebi o impacto que os detalhes certos podem ter na forma como um
          dia é vivido e lembrado.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Mais do que peças bonitas, são elementos que orientam, acompanham e
          dão identidade a cada momento.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Foi aí que percebi que queria ajudar outros casais a viver o mesmo —
          um processo cuidado, próximo e pensado ao pormenor.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Aqui, cada projeto é desenvolvido com tempo, intenção e uma atenção
          especial aos detalhes que fazem a diferença.
        </Typography>

        <div className="about-section__signature">
          <Typography variant="body2">—</Typography>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            gutterBottom
            className="HelloJanuaryCyrillicScript"
          >
            Patrícia Silva Fernandes
          </Typography>
        </div>
      </div>
      {!isMobile && (
        <LazyImage
          image={patsilvarteAboutmePhoto}
          alt="Patsilvarte Weddings founder Patricia Silva Fernandes"
          className="about-section__image"
        />
      )}
    </div>
  );
};
