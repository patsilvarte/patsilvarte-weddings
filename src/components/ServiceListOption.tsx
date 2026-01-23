import { Typography } from "@mui/material";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { ServiceInfo } from "../info/types";
import "./ServiceListOption.scss";

interface ServiceListOptionProps {
  info: ServiceInfo;
}

export const ServiceListOption: FC<ServiceListOptionProps> = ({ info }) => {
  const navigate = useNavigate();
  return (
    <div
      className="service-card"
      key={info.name}
      onClick={() => navigate(info.url)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={new URL(`../assets/services/${info.cover}`, import.meta.url).href}
        alt={info.name}
        className="service-card__image"
      />
      <Typography variant="subtitle2" className="service-card__text">
        {info.name}
      </Typography>
    </div>
  );
};
