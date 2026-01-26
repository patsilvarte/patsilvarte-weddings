import { Typography } from "@mui/material";

import {
  gloriaMicaelPhotos
} from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";

export const GloriaMicaelWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        Glória e Micael
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        13.09.2025
      </Typography>
      <PhotoGallery photosList={gloriaMicaelPhotos} />
    </div>
  );
};
