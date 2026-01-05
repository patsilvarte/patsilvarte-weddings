import GM_names_logo from "../assets/gloria_micael/logo-nomes-black.png";
import photo_patricia_joao_b6 from "../assets/patricia_joao/b_6.jpg";
import PJ_names_logo from "../assets/patricia_joao/logo-nomes-black.png";
import SJ_names_logo from "../assets/sofia_julien/logo-nomes-black.png";
import { type WeddingInfo, WeddingServices } from "./types";

export const full_weddings_list: WeddingInfo[] = [
  {
    name: "Patrícia e João",
    alt: "casamento Patrícia e João",
    img: photo_patricia_joao_b6,
    img_hover: PJ_names_logo,
    tags: [
      WeddingServices.IDENTIDADE_VISUAL,
      WeddingServices.CONVITES,
      WeddingServices.SEATING_CHART,
      WeddingServices.PAINEIS_BOAS_VINDAS,
      WeddingServices.MENUS,
      WeddingServices.NUMEROS_MESA,
      WeddingServices.ALUGUER,
      WeddingServices.LEMBRANÇAS,
    ],
  },
  {
    name: "Glória e Micael",
    alt: "casamento Glória e Micael",
    img: photo_patricia_joao_b6,
    img_hover: GM_names_logo,
    tags: [
      WeddingServices.IDENTIDADE_VISUAL,
      WeddingServices.CONVITES,
      WeddingServices.SEATING_CHART,
      WeddingServices.PAINEIS_BOAS_VINDAS,
      WeddingServices.MENUS,
      WeddingServices.NUMEROS_MESA,
      WeddingServices.ALUGUER,
      WeddingServices.LEMBRANÇAS,
    ],
  },
  {
    name: "Sofia e Julien",
    alt: "casamento Sofia e Julien",
    img: photo_patricia_joao_b6,
    img_hover: SJ_names_logo,
    tags: [WeddingServices.PAINEIS_BOAS_VINDAS],
  },
  {
    name: "Sofia e Julien",
    alt: "casamento Sofia e Julien",
    img: photo_patricia_joao_b6,
    img_hover: SJ_names_logo,
    tags: [WeddingServices.PAINEIS_BOAS_VINDAS],
  },
];
