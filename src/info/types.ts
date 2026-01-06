export type WeddingInfo = {
  name: string;
  tags: string[];
  img: string;
  img_hover?: string;
  alt: string;
  url?: string;
};

export enum WeddingServices {
  IDENTIDADE_VISUAL = "Identidade visual",
  CONVITES = "Convites",
  SEATING_CHART = "Seating chart",
  PAINEIS_BOAS_VINDAS = "Paineis boas vindas",
  MENUS = "Menus",
  NUMEROS_MESA = "Números de mesa",
  ALUGUER = "Aluguer",
  LEMBRANÇAS = "Lembranças",
  EXTRAS = "Extras",
}
