import { Typography } from "@mui/material";

import { casamento_patricia_joao_13_7_24 } from "../../info/data";
import { photosListPatriciaJoao } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";
import { ExploreMore } from "./ExploreMore";

export const PatriciaJoaoWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        {casamento_patricia_joao_13_7_24.name}
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        {casamento_patricia_joao_13_7_24.date}
      </Typography>
      <PhotoGallery photosList={photosListPatriciaJoao} />
      <ExploreMore />
    </div>
  );
};
