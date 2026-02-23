import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, useMediaQuery } from "@mui/material";
import type { FC } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { PhotoInfo } from "../../info/types";
import { LazyImage } from "./LazyImage";
import "./PhotoGalleryDialog.scss";

interface PhotoGalleryDialogProps {
  open: boolean;
  handleClose: () => void;
  photosList: PhotoInfo[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const PhotoGalleryDialog: FC<PhotoGalleryDialogProps> = ({
  open,
  handleClose,
  photosList,
  activeIndex,
  setActiveIndex,
}) => {
  const isMobile = !useMediaQuery("(min-width:900px)");

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? photosList.length - 1 : prev - 1));
  };
  const goNext = () => {
    setActiveIndex((prev) => (prev === photosList.length - 1 ? 0 : prev + 1));
  };

  const close = (_: unknown, reason: "backdropClick" | "escapeKeyDown") => {
    if (reason === "backdropClick") return;
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(6px)",
          },
        },
        root: {
          sx: {
            backgroundColor: "transparent",
          },
        },
      }}
      maxWidth="lg"
    >
      <Box className="photo-gallery-dialog__box">
        <IconButton
          className="photo-gallery-dialog__icon photo-gallery-dialog__icon--close"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        {isMobile ? (
          <Swiper
            modules={[Navigation, Keyboard, Pagination]}
            initialSlide={activeIndex}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoHeight={true}
            grabCursor={true}
            keyboard
            loop
            className="photo-gallery-dialog__swiper"
            pagination={{
              type: "fraction",
            }}
          >
            {photosList.map((photo, index) => (
              <SwiperSlide key={index}>
                <LazyImage image={photo.src} className="photo-gallery__image" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <IconButton
              className="photo-gallery-dialog__icon photo-gallery-dialog__icon--left"
              onClick={goPrevious}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            <LazyImage
              image={photosList[activeIndex].src}
              className="photo-gallery-dialog__image"
            />

            <IconButton
              className="photo-gallery-dialog__icon photo-gallery-dialog__icon--right"
              onClick={goNext}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </>
        )}
      </Box>
    </Dialog>
  );
};
