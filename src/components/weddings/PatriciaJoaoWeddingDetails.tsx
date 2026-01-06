import Masonry from "@mui/lab/Masonry";
import { Box, Typography } from "@mui/material";
import { Navbar } from "../general/Navbar";
import "./WeddingDetails.scss";

import a15 from "../../assets/patricia_joao/a_15.jpg";
import a21 from "../../assets/patricia_joao/a_21.jpg";
import a23 from "../../assets/patricia_joao/a_23.jpg";
import a3 from "../../assets/patricia_joao/a_3.jpg";
import a5 from "../../assets/patricia_joao/a_5.jpg";
import b31 from "../../assets/patricia_joao/b_31.jpg";
import b6 from "../../assets/patricia_joao/b_6.jpg";
import d1 from "../../assets/patricia_joao/d_1.jpg";
import d11 from "../../assets/patricia_joao/d_11.jpg";
import d12 from "../../assets/patricia_joao/d_12.jpg";
import d13 from "../../assets/patricia_joao/d_13.jpg";
import d14 from "../../assets/patricia_joao/d_14.jpg";
import d2 from "../../assets/patricia_joao/d_2.jpg";
import d21 from "../../assets/patricia_joao/d_21.jpg";
import d32 from "../../assets/patricia_joao/d_32.jpg";
import d34 from "../../assets/patricia_joao/d_34.jpg";
import d35 from "../../assets/patricia_joao/d_35.jpg";
import d7 from "../../assets/patricia_joao/d_7.jpg";
import d9 from "../../assets/patricia_joao/d_9.jpg";
import f134 from "../../assets/patricia_joao/f_134.jpg";
import f135 from "../../assets/patricia_joao/f_135.jpg";
import f185 from "../../assets/patricia_joao/f_185.jpg";
import f196 from "../../assets/patricia_joao/f_196.jpg";
import o1 from "../../assets/patricia_joao/outros_1.png";
import o2 from "../../assets/patricia_joao/outros_2.png";
import o3 from "../../assets/patricia_joao/outros_3.png";

const photosList = [
  b6,
  b31,
  a5,
  a3,
  a21,
  a23,
  a15,
  d9,
  d11,
  d1,
  d2,
  d12,
  d13,
  d14,
  d21,
  d32,
  d7,
  d34,
  d35,
  f134,
  f135,
  f185,
  f196,
  o1,
  o2,
  o3,
];

export const PatriciaJoaoWeddingDetails = () => {
  return (
    <div className="wedding-details">
      <Navbar />
      <Typography variant="h2"> Patrícia e João </Typography>
      <Typography variant="h6"> 13.07.2024 </Typography>
      <Box className="wedding-details__grid">
        <Masonry columns={3} spacing={2}>
          {photosList.map((item, index) => (
            <div key={index}>
              <img
                srcSet={item}
                src={item}
                loading="lazy"
                className="wedding-details__grid-image"
              />
            </div>
          ))}
        </Masonry>
      </Box>
    </div>
  );
};
