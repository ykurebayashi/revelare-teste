import { ImageGalleryItem } from "../../components/ImageGalleryItem";
import { TextGalleryItem } from "../../components/TextGalleryItem";
import { GalleryItem } from "./types";
import F1 from "../../assets/f1.jpg";
import F2 from "../../assets/f2.jpg";
import F3 from "../../assets/f3.jpg";
import F4 from "../../assets/f4.jpg";
import F5 from "../../assets/f5.jpg";
import Bg2 from "../../assets/bg2.jpg";
import Bg3 from "../../assets/bg3.jpg";
import C1 from "../../assets/c1.jpg";
import C2 from "../../assets/c2.jpg";
import C3 from "../../assets/c3.jpg";

const firstGallery: GalleryItem[] = [
  {
    title: "Quatro Bebidas, Um Milhão de Razões",
    subTitle: "Lady Gaga e a starbucks compartinam uma missão: construir um mundo mais amavel e corajoso. Por meio da Fundação Born This Way, Lady Gaga inspirou seus fãs a abraçar a bondade em suas comunidades - online e no mundo todo. Com a sua ajuda, podemos capacitar os jovens a espalhar mais gentileza.", 
    buttonText: "Saber mais",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 3,
    component: TextGalleryItem,
  },
  {
    alt:"Quatro copos de plástico de café, cada um com uma letra formando a palavra 'GAGA'",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 3,
    gridRowEnd: 4,
    src: F2,
    component: ImageGalleryItem,
  },
  {
    alt: "Pessoa sorrindo e segurando um copo de café",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 4,
    src: F1,
    component: ImageGalleryItem,
  },
];
const secondGallery: GalleryItem[] = [
  {
    alt: "Mão segurando um copo de café em um fundo de folhas verdes",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 3,
    src: F3,
    component: ImageGalleryItem,
  },
  {
    title: "Apresentando Vanilla Sweet Cream Cold Brew - Doce, Cremoso, Frio, Ousado",
    subTitle: "Pouco antes de servir, nosso café starbucks cold brew de mistura lenta e personalizada é coberto com um delicado creme de baunilha doce feito em casa que se espalha por toda a xícara",
    buttonText: "Saber mais",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 1,
    modalDescription: 'Teste de nova descrição',
    modalTitle: 'Teste de novo title',
    component: TextGalleryItem,
  },
  {
    alt: "Copo de café com um fundo de mármore com folhas e grãos de café",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 2,
    gridRowEnd: 3,
    src: F4,
    component: ImageGalleryItem,
  },
];
const thirdGallery: GalleryItem[] = [
  {
    title: "Chegou o novo ultra caramel frappuccino!",
    subTitle: "Parabéns por favor isso! Isso exige caramelo. Com creme de leite fresco. Chegou o novo ultra caramel frappuccino!",
    buttonText: "Saber mais",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 3,
    component: TextGalleryItem,
    background:Bg2
  },
  {
    alt: "Pessoa tomando um copo de café por um canudo",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 3,
    src: F5,
    component: ImageGalleryItem,
  },
];
const fourthGallery: GalleryItem[] = [
  {
    title: "A bondade começa com uma xícara",
    subTitle: "Apresentando a coleção Cups of Kindness: quatro drinks muito especiais tão delicioso e refrescantes quanto lindos. Duas novas criações, Match Lemonade e Violet Drink, irão se juntar a Pink Drink e Ombré Pink Drink como favoritos instantâneos do verão.",
    buttonText: "Saber mais",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 3,
    component: TextGalleryItem,
  },
  {
    alt: "Quatro copos de plástico de café, cada um de um sabor e cor diferente",
    gridColumnStart:2,
    gridColumnEnd: 4,
    gridRowStart: 1,
    gridRowEnd: 3,
    src: Bg3,
    component: ImageGalleryItem,
    imageFit: 'fill'
  },

]

export const gallerySection: {division: 'third'  | 'half', galleryItems: GalleryItem[], backgroundColor?: string, columns?: number}[] = [
  {
    division: "third",
    galleryItems: firstGallery
  },
  {
    division: "half",
    galleryItems: secondGallery
  },
  {
    division: "half",
    galleryItems: thirdGallery
  },
  {
    division: "half",
    galleryItems: fourthGallery,
    backgroundColor: '#e7e9ed',
    columns: 3
  }

]

export const coffeeButtons = [
  {
  background: C1,
  alt: "Copo de café com chantilly e cor de caramelo",
  },
  {
    background: C2,
    alt: "Copo de café com chantilly e cor de chocolate",
  },
  {
    background: C3,
    alt: "Copo de café com chantilly e cor verde",
}];