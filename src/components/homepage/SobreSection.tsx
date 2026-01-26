import { Typography } from "@mui/material";
import patsilvarteAboutmePhoto from "../../assets/Patsilvart_me_photo.png";
import "./SobreSection.scss";

export const SobreSection = () => {
  return (
    <div className="about-section">
      <div className="about-section__text">
        <Typography
          variant="h1"
          gutterBottom
          className="HelloJanuaryCyrillicScript"
        >
          Sobre
        </Typography>
        {/* <Typography
          variant="h2"
          gutterBottom
          className="HelloJanuaryCyrillicScript about-section__title--before"
        >
          Por detrás do
        </Typography>
        <div className="about-section__title">
          <Typography
            variant="h4"
            gutterBottom
            className="HelloParisSansRegular"
          >
            patsilvarte
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            className="HelloJanuaryCyrillicScript about-section__title__highlight"
          >
            weddings
          </Typography>
        </div> */}
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

        <Typography variant="body2" className="about-section__signature">
          —
          <Typography
            variant="h3"
            gutterBottom
            className="HelloJanuaryCyrillicScript"
          >
            Patrícia Silva Fernandes
          </Typography>
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
