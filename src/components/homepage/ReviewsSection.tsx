import { Box } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { reviews_weddings_list } from "../../info/data";
import { ReviewCard } from "../general/ReviewCard";
import { Title } from "../general/Title";
import "./ReviewsSection.scss";

export const ReviewsSection = () => {
  const reviews = reviews_weddings_list.filter((info) => info.review);

  return (
    <Box className="wedding-reviews">
      <Title title="O que dizem os nossos noivos" />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
        style={{ paddingTop: "20px", paddingBottom: "50px" }}
      >
        {reviews.map((info, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              name={info.name}
              message={info.review!}
              services={info.tags}
              img={info.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
