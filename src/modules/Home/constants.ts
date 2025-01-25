import { ImageGalleryItem } from "../../components/ImageGalleryItem";
import { TextGalleryItem } from "../../components/TextGalleryItem";
import { GalleryItem } from "./types";
import F1 from "../../assets/f1.jpg";
import F2 from "../../assets/f2.jpg";
import F3 from "../../assets/f3.jpg";
import F4 from "../../assets/f4.jpg";

const firstGallery: GalleryItem[] = [
  {
    title: "Quatro bebidas, um milhão de razões",
    subTitle: "Lady Gaga e a starbucks compartinam uma missão: construir um mundo mais amavel e corajoso. Por meio da Fundação Born This Way, Lady Gaga inspirou seus fãs a abraçar a bondade em suas comunidades - online e no mundo todo. Com a sua ajuda, podemos capacitar os jovens a espalhar mais gentileza.", 
    buttonText: "Saber mais",
    buttonClick: () => alert("button function"),
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 1,
    gridRowEnd: 3,
    component: TextGalleryItem,
  },
  {
    alt: "coffe image",
    gridColumnStart: 1,
    gridColumnEnd: 1,
    gridRowStart: 3,
    gridRowEnd: 4,
    src: F2,
    component: ImageGalleryItem,
  },
  {
    alt: "coffe image",
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
    alt: "coffe image",
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
    buttonClick: () => alert("button function"),
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 1,
    component: TextGalleryItem,
  },
  {
    alt: "coffe image",
    gridColumnStart: 2,
    gridColumnEnd: 2,
    gridRowStart: 2,
    gridRowEnd: 3,
    src: F4,
    component: ImageGalleryItem,
  },
];

export const gallerySection: {division: 'third'  | 'half', galleryItems: GalleryItem[]}[] = [
  {
    division: "third",
    galleryItems: firstGallery
  },
  {
    division: "half",
    galleryItems: secondGallery
  }
]