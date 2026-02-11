import { Card, CardContent, Typography } from "@mui/material";
import type { WeddingServices } from "../../info/types";
import "./ReviewCard.scss";

interface ReviewProps {
  name: string;
  message: string;
  services: WeddingServices[];
  img: string;
  isWeddingPage?: boolean;
}

export const ReviewCard = ({
  name,
  message,
  services,
  img,
  isWeddingPage = false,
}: ReviewProps) => {
  return (
    <Card
      className={`review-card ${isWeddingPage ? "review-card--wedding-page" : ""}`}
    >
      <CardContent>
        <Typography variant="body1">“{message}”</Typography>

        <div className="review-card__ref">
          <img className="review-card__img" src={img} />

          <div>
            <Typography variant="h6" fontWeight={600}>
              {name}
            </Typography>

            {services && services.length > 0 && (
              <Typography variant="body2" color="text.secondary">
                {services.join(", ")}
              </Typography>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
