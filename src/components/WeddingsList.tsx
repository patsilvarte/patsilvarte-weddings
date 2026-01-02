import { Typography } from "@mui/material";
import photo_patricia_joao_b31 from "../assets/patricia_joao/b_31.jpg";
import photo_patricia_joao_b6 from "../assets/patricia_joao/b_6.jpg";
import type { WeddingInfo } from "../types";
import { Button } from "./general/Button";
import { WeddingListCard } from "./WeddingListCard";

import "./WeddingsList.scss";

export const WeddingsList = () => {
  const list: WeddingInfo[] = [
    {
      name: "Patrícia e João",
      alt: "casamento Patrícia e João",
      img: photo_patricia_joao_b6,
      img_hover: photo_patricia_joao_b31,
      tags: [
        "Identidade visual",
        "convites",
        "seating chart",
        "paineis boas vindas",
        "menus",
        "números de mesa",
        "alugueres",
        "lembranças",
      ],
    },
    {
      name: "Glória e Micael",
      alt: "casamento Glória e Micael",
      img: photo_patricia_joao_b6,
      img_hover: photo_patricia_joao_b31,
      tags: [
        "Identidade visual",
        "convites",
        "seating chart",
        "paineis boas vindas",
        "menus",
        "números de mesa",
        "alugueres",
        "lembranças",
      ],
    },
    {
      name: "Sofia e Julien",
      alt: "casamento Sofia e Julien",
      img: photo_patricia_joao_b6,
      img_hover: photo_patricia_joao_b31,
      tags: ["paineis boas vindas"],
    },
  ];
  return (
    <div className="weddings-list">
      <Typography variant="h3" gutterBottom>
        Casamentos
      </Typography>
      <Typography variant="h6" component="body" gutterBottom>
        Detalhes sobre o dia especial dos nossos clientes
      </Typography>

      <div className="weddings-list__container">
        {list.map((info) => (
          <WeddingListCard info={info} key={info.name} />
        ))}
      </div>

      <Button>Explorar todos os casamentos</Button>
    </div>
  );
};
