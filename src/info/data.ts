import gloria_micael_IMG_9109 from "../assets/gloria_micael/IMG_9109.jpg";
import GM_names_logo from "../assets/gloria_micael/logo-nomes-black.png";
import photo_patricia_joao_b6 from "../assets/patricia_joao/b_6.jpg";
import PJ_names_logo from "../assets/patricia_joao/logo-nomes-black.png";
import sofia_julien_IMG_9783 from "../assets/sofia_julien/IMG_9783.jpg";

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
  img: gloria_micael_IMG_9109,
  img_hover: GM_names_logo,
  url: "/casamentos/130925-gloria-micael",
  review:
    "Patrícia, não tenho palavras para expressar o quanto estou agradecida pelo trabalho incrível no nosso casamento! Desde os convites até às lembranças, tudo foi feito com carinho e atenção ao detalhe. As tuas ideias criativas e essa capacidade de entender exatamente o que queríamos foram fundamentais para tornar o nosso dia ainda mais especial. Foste um ombro amigo, sempre disponível para ouvir e aconselhar. Recomendo os serviços da Patrícia a todas as noivas que procuram alguém que não faça apenas um trabalho excelente, mas que também seja uma parceira em todo o processo.",
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
  img: sofia_julien_IMG_9783,
  img_hover: SJ_names_logo,
  url: "/casamentos/041025-sofia-julien",
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
export const reviews_weddings_list: WeddingInfo[] = [
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
      "Criamos convites de casamento personalizados que contam a história única de cada casal, desde os elegantes cartões até os envelopes sofisticados. Utilizamos materiais de alta qualidade e designs exclusivos para capturar a essência do amor da vossa celebração.",
    cover: "convites.svg",
  },
  {
    name: "Seating Chart",
    tag: WeddingServices.SEATING_CHART,
    url: "/servicos/seating-chart",
    description:
      "Criamos mapas de assentos personalizados, que combinam funcionalidade e beleza, ajudando a organizar a disposição dos convidados com elegância. Cada design é pensado para refletir o estilo do evento, garantindo que todos os convidados encontram o seu lugar com facilidade.",
    cover: "seating_chart.svg",
  },
  {
    name: "Paineis de Boas Vindas",
    tag: WeddingServices.PAINEIS_BOAS_VINDAS,
    url: "/servicos/paineis-boas-vindas",
    description:
      "Recebam os vossos convidados com paineis de boas-vindas que encantam e criam uma atmosfera inesquecível. Desenvolvemos designs únicos e personalizados que harmonizam com o tema do vosso casamento, proporcionando uma recepção calorosa e cheia de estilo.",
    cover: "painel_boas_vindas.svg",
  },
  {
    name: "Menus",
    tag: WeddingServices.MENUS,
    url: "/servicos/menus",
    description:
      "Transformem a mesa de refeição do vosso casamento em uma experiência memorável com menus elegantes e personalizados. Cada design é criado para complementar o tema do evento, adicionando um toque de sofisticação à mesa e encantando os convidados.",
    cover: "menus.svg",
  },
  {
    name: "Números de Mesa",
    tag: WeddingServices.NUMEROS_MESA,
    url: "/servicos/numeros-mesa",
    description:
      "Adicionem charme e organização ao vosso casamento com números de mesa personalizados. Criamos designs que não apenas orientam os convidados, mas também complementam a decoração, garantindo uma experiência harmoniosa e inesquecível.",
    cover: "numeros_mesa.svg",
  },
  {
    name: "Aluguer",
    tag: WeddingServices.ALUGUER,
    url: "/servicos/aluguer",
    description:
      "A decoração não precisa de ser um peso grande na carteira e no ambiente e a pensar nisso criámos um serviço de aluguer de materiais e decorações para casamentos. A nossa seleção combina qualidade e estilo, ajudando a criar um ambiente único e inesquecível. Caso tenham novas ideas estamos sempre disponiveis para o aumentar o nosso catálogo.",
    cover: "aluguer.svg",
  },
  {
    name: "Lembranças",
    tag: WeddingServices.LEMBRANÇAS,
    url: "/servicos/lembrancas",
    description:
      "Criem memórias inesquecíveis com lembranças personalizadas que refletem o amor e a essência do vosso casamento. Desenvolvemos, juntamente com outros pequenos negócios, itens únicos e significativos para que os vossos convidados levem para casa uma parte especial do vosso grande dia.",
    cover: "lembrancas.svg",
  },
  {
    name: "Extras",
    tag: WeddingServices.EXTRAS,
    url: "/servicos/extras",
    description:
      "Queremos que os nossos noivos tenham tudo o que sempre sonharam. Qualquer outro elemento que precisem para complementar o vosso dia, nós tratamos com todo o carinho para adicionar um toque especial ao seu casamento.",
    cover: "extras.svg",
  },
];
