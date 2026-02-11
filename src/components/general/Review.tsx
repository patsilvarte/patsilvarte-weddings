import { Card, CardContent, Typography } from "@mui/material";
import type { WeddingServices } from "../../info/types";

interface ReviewProps {
  name: string;
  message: string;
  services: WeddingServices[];
}

export const Review = ({ name, message, services }: ReviewProps) => {
  return (
    <Card
      sx={{
        maxWidth: 420,
        mx: "auto",
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
          “{message}”
        </Typography>

        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>

        {services && services.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            {services.join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
