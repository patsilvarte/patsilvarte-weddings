import { Typography } from "@mui/material";
import type { WeddingInfo } from "../../info/types";
import { ReviewCard } from "../general/ReviewCard";

interface WeddingReviewProps {
  weddingInfo: WeddingInfo;
}

export const WeddingReview = ({ weddingInfo }: WeddingReviewProps) => {
  return (
    <div style={{ margin: "80px 0" }}>
      <Typography
        variant="h2"
        gutterBottom
        className="HelloJanuaryCyrillicScript"
      >
        O Feedback que recebemos
      </Typography>
      <ReviewCard
        isWeddingPage
        name={weddingInfo.name}
        message={weddingInfo.review!}
        services={weddingInfo.tags}
        img={weddingInfo.img}
      />
    </div>
  );
};
