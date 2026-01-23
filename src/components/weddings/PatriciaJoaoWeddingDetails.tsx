import { Typography } from "@mui/material";
import { Navbar } from "../general/Navbar";
import "./WeddingDetails.scss";

import { photosListPatriciaJoao } from "../../info/photo_tags";
import { PhotoGallery } from "../general/PhotoGallery";


export const PatriciaJoaoWeddingDetails = () => {

  return (
    <div className="wedding-details">
      <Navbar />
      <Typography variant="h2"> Patrícia e João </Typography>
      <Typography variant="h6"> 13.07.2024 </Typography>
      <PhotoGallery photosList={photosListPatriciaJoao} />
    </div>
  );
};
