import IMG_9782 from "../../assets/sofia_julien/IMG_9782.jpg?w=320;480;768;1024;1600;2200&format=webp";
import IMG_9783 from "../../assets/sofia_julien/IMG_9783.jpg?w=320;480;768;1024;1600;2200&format=webp";
import IMG_9784 from "../../assets/sofia_julien/IMG_9784.jpg?w=320;480;768;1024;1600;2200&format=webp";
import IMG_9785 from "../../assets/sofia_julien/IMG_9785.jpg?w=320;480;768;1024;1600;2200&format=webp";
import IMG_9799 from "../../assets/sofia_julien/IMG_9799.jpg?w=320;480;768;1024;1600;2200&format=webp";
import IMG_9804 from "../../assets/sofia_julien/IMG_9804.jpg?w=320;480;768;1024;1600;2200&format=webp";
import placas_setas_dia from "../../assets/sofia_julien/placas-setas-dia.jpg?w=320;480;768;1024;1600;2200&format=webp";
import { type PhotoInfo, WeddingServices } from "../types";

export const sj_IMG_9782_photo: PhotoInfo = {
  src: IMG_9782,
  tags: [WeddingServices.SOFIA_JULIEN],
};
export const sj_IMG_9784_photo: PhotoInfo = {
  src: IMG_9784,
  tags: [WeddingServices.SOFIA_JULIEN],
};
export const sj_IMG_9783_photo: PhotoInfo = {
  src: IMG_9783,
  tags: [
    WeddingServices.SOFIA_JULIEN,
    WeddingServices.PAINEIS_BOAS_VINDAS,
    WeddingServices.ALUGUER,
  ],
};

export const sj_IMG_9785_photo: PhotoInfo = {
  src: IMG_9785,
  tags: [WeddingServices.SOFIA_JULIEN],
};

export const sj_IMG_9799_photo: PhotoInfo = {
  src: IMG_9799,
  tags: [
    WeddingServices.SOFIA_JULIEN,
    WeddingServices.PAINEIS_BOAS_VINDAS,
    WeddingServices.ALUGUER,
  ],
};

export const sj_IMG_9804_photo: PhotoInfo = {
  src: IMG_9804,
  tags: [WeddingServices.SOFIA_JULIEN],
};
export const sj_placas_setas_dia_photo: PhotoInfo = {
  src: placas_setas_dia,
  tags: [WeddingServices.SOFIA_JULIEN, WeddingServices.PAINEIS_BOAS_VINDAS],
};

export const sofiaJulienPhotos: PhotoInfo[] = [
  sj_IMG_9782_photo,
  sj_IMG_9784_photo,
  sj_IMG_9783_photo,
  sj_IMG_9785_photo,
  sj_IMG_9799_photo,
  sj_IMG_9804_photo,
  sj_placas_setas_dia_photo,
];
