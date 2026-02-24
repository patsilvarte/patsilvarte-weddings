import { Typography } from "@mui/material";

import { casamento_sofia_julien_4_10_25 } from "../../info/data";
import { sofiaJulienPhotos } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";
import { WeddingReview } from "./WeddingReview";

export const SofiaJulienWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        {casamento_sofia_julien_4_10_25.name}
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        {casamento_sofia_julien_4_10_25.date}
      </Typography>
      <PhotoGallery photosList={sofiaJulienPhotos} />
      <WeddingReview weddingInfo={casamento_sofia_julien_4_10_25} />
    </div>
  );
};
