import { Typography } from "@mui/material";

import type { FC } from "react";
import { services_list } from "../info/data";
import { ServiceListOption } from "./ServiceListOption";
import "./ServicesList.scss";

interface ServicesListProps {
  exclude_tags?: string[];
}

export const ServicesList: FC<ServicesListProps> = ({ exclude_tags = [] }) => {
  const filteredServices = services_list.filter(
    (service) => !exclude_tags.includes(service.name),
  );
  const is_limited = exclude_tags.length > 0;

  return (
    <div
      className={`services-list ${is_limited ? "services-list--limited" : ""}`}
      id="casamentos"
    >
      <Typography variant={is_limited ? "h4" : "h3"} gutterBottom>
        {is_limited ? "Também poderás precisar" : "Serviços"}
      </Typography>
      {!is_limited && (
        <div className="services-list__description">
          <Typography variant="h6" gutterBottom align="center">
            Descubra os serviços que oferecemos para tornar o seu dia especial
            inesquecível.
          </Typography>
        </div>
      )}

      <div className="services-list__container">
        {filteredServices.map((info) => (
          <ServiceListOption info={info} />
        ))}
      </div>
    </div>
  );
};
