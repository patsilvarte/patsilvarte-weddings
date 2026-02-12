import { Typography, useMediaQuery } from "@mui/material";
import type { FC } from "react";
import "./Title.scss";

interface TitleProps {
  title: string;
  isH1?: boolean;
  isSecondary?: boolean;
  className?: string;
}

export const Title: FC<TitleProps> = ({
  title,
  isH1,
  isSecondary,
  className,
}) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <Typography
      variant={
        isMobile ? (isSecondary ? "h3" : "h2") : isSecondary ? "h2" : "h1"
      }
      component={isH1 ? "h1" : "h2"}
      gutterBottom
      className={`HelloJanuaryCyrillicScript ${className}`}
      align="center"
    >
      {title}
    </Typography>
  );
};

export const SubTitle: FC<TitleProps> = ({ title, className }) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <Typography
      variant={isMobile ? "h5" : "h4"}
      component="h3"
      gutterBottom
      className={`HelloParisSansRegular subtitle ${className}`}
      align="center"
    >
      {title}
    </Typography>
  );
};
