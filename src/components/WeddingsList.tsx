import { Button } from "./general/Button";
import { WeddingListCard } from "./WeddingListCard";

import { Typography } from "@mui/material";
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
      {/* <img
        src={new URL(`../assets/fonts/casamentos.svg`, import.meta.url).href}
        alt="Casamentos"
        className="weddings-list__header-image"
      /> */}
      <Typography
        variant="h2"
        gutterBottom
        className="HelloJanuaryCyrillicScript"
      >
        Casamentos
      </Typography>
      <Typography variant="h5" gutterBottom className="HelloParisSansRegular">
        detalhes sobre o dia especial dos nossos clientes
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
