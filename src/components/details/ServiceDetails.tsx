import { Typography } from "@mui/material";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { services_list } from "../../info/data";
import { allPhotos } from "../../info/photo_tags";
import type { WeddingServices } from "../../info/types";
import { PhotoGallery } from "../general/PhotoGallery";
import { ServicesList } from "../ServicesList";

interface ServiceDetailsProps {
  service: WeddingServices;
}

export const ServiceDetails: FC<ServiceDetailsProps> = ({ service }) => {
  const navigate = useNavigate();
  const photos = allPhotos.filter((photo) => photo.tags.includes(service));
  const service_data = services_list.find((s) => s.tag === service);

  if (!service_data) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <Typography variant="h2">{service_data.name}</Typography>
      <Typography variant="h6">{service_data.description}</Typography>
      <PhotoGallery photosList={photos} />
      <ServicesList exclude_tags={[service]} />
    </div>
  );
};
