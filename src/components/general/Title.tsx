import { Typography, type TypographyProps, useMediaQuery } from "@mui/material";
import type { FC } from "react";

interface TitleProps {
  title: string;
  isH1?: boolean;
  isSecondary?: boolean;
  className?: string;
  align?: TypographyProps["align"];
  gutterBottom?: TypographyProps["gutterBottom"];
}

export const Title: FC<TitleProps> = ({
  title,
  isH1,
  isSecondary,
  className,
  align = "center",
  gutterBottom = true,
}) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <Typography
      variant={
        isMobile ? (isSecondary ? "h3" : "h2") : isSecondary ? "h2" : "h1"
      }
      component={isH1 ? "h1" : "h2"}
      gutterBottom={gutterBottom}
      className={`HelloJanuaryCyrillicScript ${className}`}
      align={align}
    >
      {title}
    </Typography>
  );
};

export const SubTitle: FC<TitleProps> = ({
  title,
  className,
  align = "center",
  gutterBottom = true,
}) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <Typography
      variant={isMobile ? "h5" : "h4"}
      component="h3"
      gutterBottom={gutterBottom}
      className={`HelloParisSansRegular subtitle ${className}`}
      align={align}
    >
      {title}
    </Typography>
  );
};
