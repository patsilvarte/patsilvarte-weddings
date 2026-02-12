import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Navigation, Pagination } from "swiper/modules";
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
        modules={[Navigation, Pagination, Keyboard]}
        keyboard
        navigation
        effect="fade"
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: reviews.length > 1 ? 2 : 1,
            spaceBetween: 60,
          },
        }}
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
