import { Typography } from "@mui/material";

import { sofiaJulienPhotos } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";

export const SofiaJulienWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        Sofia e Julien
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        04.10.2025
      </Typography>
      <PhotoGallery photosList={sofiaJulienPhotos} />
    </div>
  );
};
