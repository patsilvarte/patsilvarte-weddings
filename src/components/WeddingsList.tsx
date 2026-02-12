import { Button } from "./general/Button";
import { WeddingListCard } from "./WeddingListCard";

import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { full_weddings_list, highlight_weddings_list } from "../info/data";
import { SubTitle, Title } from "./general/Title";
import "./WeddingsList.scss";

interface WeddingListProps {
  isHomepage?: boolean;
}

export const WeddingsList: FC<WeddingListProps> = ({ isHomepage }) => {
  const navigate = useNavigate();

  const finalList = isHomepage ? highlight_weddings_list : full_weddings_list;

  return (
    <div className="weddings-list" id="casamentos">
      <Title title="Casamentos" />
      <SubTitle title="detalhes sobre o dia especial dos nossos clientes" />

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
