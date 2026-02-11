import { Box, Stack, Typography } from "@mui/material";
import { reviews_weddings_list } from "../info/data";
import { Review } from "./general/Review";

export const WeddingReviews = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        variant="h1"
        gutterBottom
        className="HelloJanuaryCyrillicScript"
      >
        O que dizem os nossos noivos
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ mt: 4 }}
      >
        {reviews_weddings_list
          .filter((info) => info.review)
          .map((info, index) => (
            <Review
              key={index}
              name={info.name}
              message={info.review!}
              services={info.tags}
            />
          ))}
      </Stack>
    </Box>
  );
};
