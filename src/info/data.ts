import GM_names_logo from "../assets/gloria_micael/logo-nomes-black.png";
import photo_patricia_joao_b6 from "../assets/patricia_joao/b_6.jpg";
import PJ_names_logo from "../assets/patricia_joao/logo-nomes-black.png";
import SJ_names_logo from "../assets/sofia_julien/logo-nomes-black.png";
import { type WeddingInfo, WeddingServices } from "./types";

const casamento_patricia_joao_13_7_24: WeddingInfo = {
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
};

const casamento_gloria_micael_13_9_25: WeddingInfo = {
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
};
const casamento_sofia_julien_4_10_25: WeddingInfo = {
  name: "Sofia e Julien",
  alt: "casamento Sofia e Julien",
  img: photo_patricia_joao_b6,
  img_hover: SJ_names_logo,
  tags: [WeddingServices.PAINEIS_BOAS_VINDAS],
};

export const highlight_weddings_list: WeddingInfo[] = [
  casamento_patricia_joao_13_7_24,
  casamento_gloria_micael_13_9_25,
  casamento_sofia_julien_4_10_25,
];
export const full_weddings_list: WeddingInfo[] = [
  casamento_patricia_joao_13_7_24,
  casamento_gloria_micael_13_9_25,
  casamento_sofia_julien_4_10_25,
];
