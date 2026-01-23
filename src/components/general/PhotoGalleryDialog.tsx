import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  IconButton,
} from "@mui/material";
import type { FC } from "react";
import type { PhotoInfo } from "../../info/types";
import "./PhotoGalleryDialog.scss";

interface PhotoGalleryDialogProps {
  open: boolean;
  handleClose: () => void;
  photosList: PhotoInfo[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const PhotoGalleryDialog:FC<PhotoGalleryDialogProps> = ({ open, handleClose, photosList, activeIndex, setActiveIndex }) => {

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? photosList.length - 1 : prev - 1));
  }
  const goNext = () => {
    setActiveIndex((prev) => (prev === photosList.length - 1 ? 0 : prev + 1));
  }

  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <Box className="photo-gallery-dialog__box">
          <IconButton
            className="photo-gallery-dialog__icon photo-gallery-dialog__icon--close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            className="photo-gallery-dialog__icon photo-gallery-dialog__icon--left"
            onClick={goPrevious}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <img src={photosList[activeIndex].src} className="photo-gallery-dialog__image" />

          <IconButton
            className="photo-gallery-dialog__icon photo-gallery-dialog__icon--right"
            onClick={goNext}
          >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Dialog>
  )
}