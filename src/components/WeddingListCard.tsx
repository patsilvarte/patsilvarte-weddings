import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import type { WeddingInfo } from "../types";
import "./WeddingsList.scss";

interface WeddingListCardProps {
  info: WeddingInfo;
}

export const WeddingListCard: FC<WeddingListCardProps> = ({ info }) => {
  const { name, tags, img, alt } = info;
  return (
    <Card sx={{ maxWidth: 1100, minWidth: 300, width: "30%", height: 500 }}>
      <CardActionArea>
        <CardMedia component="img" height={500} image={img} alt={alt} />
        <CardContent className="weddings-list__card-overlay">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <div className="weddings-list__card-tags">
            {tags.map((tag, index) => (
              <>
                {index !== 0 && (
                  <div className="weddings-list__card-tags__seperator" />
                )}
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {tag}
                </Typography>
              </>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
