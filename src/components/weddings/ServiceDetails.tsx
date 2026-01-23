import { Typography } from "@mui/material";
import type { FC } from "react";
import { allPhotos } from "../../info/photo_tags";
import type { WeddingServices } from "../../info/types";
import { Navbar } from "../general/Navbar";
import { PhotoGallery } from "../general/PhotoGallery";

interface ServiceDetailsProps {
  service: WeddingServices;
}

export const ServiceDetails: FC<ServiceDetailsProps> = ({ service }) => {
  const photos = allPhotos.filter((photo) => photo.tags.includes(service));

  return (
    <div>
      <Navbar />
      <Typography variant="h2"> Patrícia e João </Typography>
      <Typography variant="h6"> 13.07.2024 </Typography>
      <PhotoGallery photosList={photos} />
    </div>
  );
};
