import { Typography } from "@mui/material";

import { photosListPatriciaJoao } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";

export const PatriciaJoaoWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        Patrícia e João
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        13.07.2024
      </Typography>
      <PhotoGallery photosList={photosListPatriciaJoao} />
    </div>
  );
};
