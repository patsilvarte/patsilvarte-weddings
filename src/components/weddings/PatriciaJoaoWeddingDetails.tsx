import Masonry from "@mui/lab/Masonry";
import { Box, Typography } from "@mui/material";
import { Navbar } from "../general/Navbar";
import "./WeddingDetails.scss";

import { useState } from "react";
import { photosListPatriciaJoao } from "../../info/photo_tags";


export const PatriciaJoaoWeddingDetails = () => {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <div className="wedding-details">
      <Navbar />
      <Typography variant="h2"> Patrícia e João </Typography>
      <Typography variant="h6"> 13.07.2024 </Typography>
      <Box className="wedding-details__grid">
        <Masonry
          columns={3}
          spacing={2}
          defaultHeight={450}
          defaultColumns={3}
          defaultSpacing={2}
        >
          {photosListPatriciaJoao.map((item, index) => (
            <div
              className={`wedding-details__grid-box wedding-details__grid-box--${
                loaded[index] ? "visible" : "invisible"
              }`}
              key={index}
            >
              <img
                srcSet={item}
                src={item}
                loading="lazy"
                onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
                className="wedding-details__grid-image"
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};
