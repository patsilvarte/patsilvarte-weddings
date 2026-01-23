import GM_names_logo from "../assets/gloria_micael/logo-nomes-black.png";
import photo_patricia_joao_b6 from "../assets/patricia_joao/b_6.jpg";
import PJ_names_logo from "../assets/patricia_joao/logo-nomes-black.png";
import SJ_names_logo from "../assets/sofia_julien/logo-nomes-black.png";
import { type ServiceInfo, type WeddingInfo, WeddingServices } from "./types";

const casamento_patricia_joao_13_7_24: WeddingInfo = {
  name: "Patrícia e João",
  alt: "casamento Patrícia e João",
  img: photo_patricia_joao_b6,
  img_hover: PJ_names_logo,
  url: "/casamentos/130724-patricia-joao",
  tags: [
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

export const services_list: ServiceInfo[] = [
  {
    name: "Convites",
    tag: WeddingServices.CONVITES,
    url: "/servicos/convites",
    description:
      "Criamos convites de casamento personalizados que contam a história única de cada casal, desde os elegantes cartões de RSVP até os envelopes sofisticados. Utilizamos materiais de alta qualidade e designs exclusivos para capturar a essência do amor e da celebração. Oferecemos uma ampla gama de opções, desde convites físicos tradicionais que encantam ao toque, até modernos convites digitais e websites de casamento que conectam corações à distância.",
    cover: "convites.svg",
  },
  {
    name: "Seating chart",
    tag: WeddingServices.SEATING_CHART,
    url: "/servicos/seating-chart",
    description:
      "Criamos mapas de assentos personalizados que combinam funcionalidade e beleza, ajudando a organizar a disposição dos convidados com elegância. Cada design é pensado para refletir o estilo do evento, garantindo que todos os convidados encontrem seus lugares com facilidade e encantamento.",
    cover: "seating_chart.svg",
  },
  {
    name: "Paineis de boas vindas",
    tag: WeddingServices.PAINEIS_BOAS_VINDAS,
    url: "/servicos/paineis-boas-vindas",
    description:
      "Receba seus convidados com paineis de boas-vindas que encantam e criam uma atmosfera inesquecível. Desenvolvemos designs únicos e personalizados que harmonizam com o tema do casamento, proporcionando uma recepção calorosa e cheia de estilo.",
    cover: "painel_boas_vindas.svg",
  },
  {
    name: "Menus",
    tag: WeddingServices.MENUS,
    url: "/servicos/menus",
    description:
      "Transforme o banquete do seu casamento em uma experiência memorável com menus elegantes e personalizados. Cada design é criado para complementar o tema do evento, adicionando um toque de sofisticação à mesa e encantando os convidados.",
    cover: "menus.svg",
  },
  {
    name: "Números de mesa",
    tag: WeddingServices.NUMEROS_MESA,
    url: "/servicos/numeros-mesa",
    description:
      "Adicione charme e organização ao seu casamento com números de mesa personalizados. Criamos designs que não apenas orientam os convidados, mas também complementam a decoração, garantindo uma experiência harmoniosa e inesquecível.",
    cover: "numeros_mesa.svg",
  },
  {
    name: "Aluguer",
    tag: WeddingServices.ALUGUER,
    url: "/servicos/aluguer",
    description:
      "Oferecemos um serviço completo de aluguer de materiais e decorações para casamentos, com itens que atendem às necessidades específicas de cada evento. Nossa seleção combina qualidade e estilo, ajudando a criar um ambiente único e inesquecível.",
    cover: "aluguer.svg",
  },
  {
    name: "Lembranças",
    tag: WeddingServices.LEMBRANÇAS,
    url: "/servicos/lembrancas",
    description:
      "Crie memórias inesquecíveis com lembranças personalizadas que refletem o amor e a essência do seu casamento. Desenvolvemos itens únicos e significativos para que seus convidados levem para casa uma parte especial do seu grande dia.",
    cover: "lembrancas.svg",
  },
];
