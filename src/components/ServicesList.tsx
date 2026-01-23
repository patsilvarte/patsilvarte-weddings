import { Typography } from "@mui/material";

import type { FC } from "react";
import { services_list } from "../info/data";
import { ServiceListOption } from "./ServiceListOption";
import "./ServicesList.scss";

export const ServicesList: FC = () => {
  return (
    <div className="services-list" id="casamentos">
      <Typography variant="h3" gutterBottom>
        Serviços
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        Descubra os serviços que oferecemos para tornar o seu dia especial
        inesquecível.
      </Typography>

      <div className="services-list__container">
        {services_list.map((info) => (
          <ServiceListOption info={info} />
        ))}
      </div>
    </div>
  );
};
