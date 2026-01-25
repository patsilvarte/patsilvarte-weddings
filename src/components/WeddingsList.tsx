import { Typography } from "@mui/material";
import { Button } from "./general/Button";
import { WeddingListCard } from "./WeddingListCard";

import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { full_weddings_list, highlight_weddings_list } from "../info/data";
import "./WeddingsList.scss";

interface WeddingListProps {
  isHomepage?: boolean;
}

export const WeddingsList: FC<WeddingListProps> = ({ isHomepage }) => {
  const navigate = useNavigate();

  const finalList = isHomepage ? highlight_weddings_list : full_weddings_list;

  return (
    <div className="weddings-list" id="casamentos">
      <Typography variant="h3" gutterBottom>
        Casamentos
      </Typography>
      <Typography variant="h6" gutterBottom>
        Detalhes sobre o dia especial dos nossos clientes
      </Typography>

      <div className="weddings-list__container">
        {finalList.map((info) => (
          <WeddingListCard info={info} key={info.name} />
        ))}
      </div>

      {isHomepage && (
        <Button onClick={() => navigate("/casamentos")}>
          Explorar todos os casamentos
        </Button>
      )}
    </div>
  );
};
