import { Typography } from "@mui/material";

import { casamento_gloria_micael_13_9_25 } from "../../info/data";
import { gloriaMicaelPhotos } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";
import { ExploreMore } from "./ExploreMore";
import { WeddingReview } from "./WeddingReview";

export const GloriaMicaelWeddingDetails = () => {
  return (
    <div>
      <Typography variant="h2" className="HelloJanuaryCyrillicScript">
        {casamento_gloria_micael_13_9_25.name}
      </Typography>
      <Typography variant="h4" className="HelloParisSansRegular">
        {casamento_gloria_micael_13_9_25.date}
      </Typography>
      <PhotoGallery photosList={gloriaMicaelPhotos} />
      <WeddingReview weddingInfo={casamento_gloria_micael_13_9_25} />
      <ExploreMore />
    </div>
  );
};
