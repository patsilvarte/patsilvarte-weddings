export type WeddingInfo = {
  name: string;
  tags: WeddingServices[];
  img: string;
  img_hover?: string;
  alt: string;
  url?: string;
};

export type ServiceInfo = {
  name: string;
  description: string;
  tag: WeddingServices;
  cover: string; //svg file
  url?: string;
};

export type PhotoInfo = { 
  src: string; 
  alt?: string;
  caption?: string; 
  tags: WeddingServices[] 
};

export enum WeddingServices {
  CONVITES = "Convites",
  SEATING_CHART = "Seating chart",
  PAINEIS_BOAS_VINDAS = "Paineis boas vindas",
  MENUS = "Menus",
  NUMEROS_MESA = "Números de mesa",
  ALUGUER = "Aluguer",
  LEMBRANÇAS = "Lembranças",
  EXTRAS = "Extras",

  PATRICIA_JOAO = "Patrícia e João",
  GLORIA_MICAEL = "Glória e Micael",
  SOFIA_JULIEN = "Sofia e Julien",
}
