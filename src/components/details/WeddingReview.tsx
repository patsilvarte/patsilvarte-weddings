import { useMediaQuery } from "@mui/material";
import type { WeddingInfo } from "../../info/types";
import { ReviewCard } from "../general/ReviewCard";
import { Title } from "../general/Title";

interface WeddingReviewProps {
  weddingInfo: WeddingInfo;
}

export const WeddingReview = ({ weddingInfo }: WeddingReviewProps) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  return (
    <div style={{ margin: isMobile ? "40px 0" : "80px 0" }}>
      <Title isSecondary title=" O Feedback que recebemos" />
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
