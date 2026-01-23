import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import type { WeddingInfo } from "../info/types";
import "./WeddingsList.scss";

interface WeddingListCardProps {
  info: WeddingInfo;
}

export const WeddingListCard: FC<WeddingListCardProps> = ({ info }) => {
  const navigate = useNavigate();
  const { name, tags, img, alt, img_hover, url } = info;
  return (
    <Card
      sx={{ maxWidth: 1100, minWidth: 300, width: "30%" }}
      className="weddings-list__card"
      onClick={() => url && navigate(url)}
    >
      <CardActionArea>
        <CardMedia component="img" height={500} image={img} alt={alt} />
        <CardContent className="weddings-list__card-overlay">
          {img_hover ? (
            <img className="weddings-list__card-names" src={img_hover} />
          ) : (
            // <CardMedia component="img" width={200} image={img_hover} />
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          )}
          <div className="weddings-list__card-tags">
            {tags.map((tag) => (
              <Typography variant="body2" key={tag}>
                {tag}
              </Typography>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
