import Masonry from "@mui/lab/Masonry";
import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState, type FC } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { PhotoInfo } from "../../info/types";
import "./PhotoGallery.scss";
import { PhotoGalleryDialog } from "./PhotoGalleryDialog";

interface PhotoGalleryProps {
  photosList: PhotoInfo[];
}

export const PhotoGallery: FC<PhotoGalleryProps> = ({ photosList }) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % photosList.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + photosList.length) % photosList.length);
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Box className="photo-gallery">
      {isMobile ? (
        <Swiper
          modules={[Navigation, Keyboard, Pagination]}
          initialSlide={activeIndex}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoHeight={true}
          grabCursor={true}
          keyboard
          loop
          className="photo-gallery__swiper"
          pagination={{ clickable: true }}
        >
          {photosList.map((photo, index) => (
            <SwiperSlide key={index}>
              <img src={photo.src} className="photo-gallery__image" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Masonry columns={3} spacing={2}>
          {photosList.map((item, index) => (
            <div
              key={index}
              className={`photo-gallery__box photo-gallery__box--${
                loaded[index] ? "visible" : "invisible"
              }`}
              onClick={() => handleOpen(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.src}
                loading="lazy"
                onLoad={() => setLoaded((prev) => ({ ...prev, [index]: true }))}
                className="photo-gallery__image"
              />
            </div>
          ))}
        </Masonry>
      )}
      <PhotoGalleryDialog
        open={open}
        handleClose={handleClose}
        photosList={photosList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Box>
  );
};
