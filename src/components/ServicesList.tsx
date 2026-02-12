
import type { FC } from "react";
import { services_list } from "../info/data";
import { ServiceListOption } from "./ServiceListOption";
import "./ServicesList.scss";
import { SubTitle, Title } from "./general/Title";

interface ServicesListProps {
  exclude_tags?: string[];
}

export const ServicesList: FC<ServicesListProps> = ({ exclude_tags = [] }) => {
  const filteredServices = services_list.filter(
    (service) => !exclude_tags.includes(service.tag),
  );
  const is_limited = exclude_tags.length > 0;

  return (
    <div
      className={`services-list ${is_limited ? "services-list--limited" : ""}`}
      id="casamentos"
    >
      <Title
        isSecondary={is_limited}
        title={is_limited ? "Outros serviços disponíveis" : "Serviços"}
      />
      {!is_limited && (
        <div className="services-list__description">
          <SubTitle title="descobre os serviços que oferecemos para tornar o vosso dia inesquecível." />
        </div>
      )}

      <div
        className={`services-list__container ${is_limited ? "services-list__container--limited" : ""}`}
      >
        {filteredServices.map((info) => (
          <ServiceListOption key={info.tag} info={info} small={is_limited} />
        ))}
      </div>
    </div>
  );
};
