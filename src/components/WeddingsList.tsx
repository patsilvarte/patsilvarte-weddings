import { Typography } from "@mui/material";
import { Button } from "./general/Button";
import { WeddingListCard } from "./WeddingListCard";

import type { FC } from "react";
import { full_weddings_list } from "../info/data";
import "./WeddingsList.scss";

interface WeddingListProps {
  ref?: React.Ref<HTMLDivElement> | undefined;
  isHomepage?: boolean;
}

export const WeddingsList: FC<WeddingListProps> = ({ ref, isHomepage }) => {
  const finalList = isHomepage
    ? full_weddings_list.slice(0, 3)
    : full_weddings_list;

  return (
    <div className="weddings-list" ref={ref} id="casamentos">
      <Typography variant="h3" gutterBottom>
        Casamentos
      </Typography>
      <Typography variant="h6" component="body" gutterBottom>
        Detalhes sobre o dia especial dos nossos clientes
      </Typography>

      <div className="weddings-list__container">
        {finalList.map((info) => (
          <WeddingListCard info={info} key={info.name} />
        ))}
      </div>

      <Button>Explorar todos os casamentos</Button>
    </div>
  );
};
