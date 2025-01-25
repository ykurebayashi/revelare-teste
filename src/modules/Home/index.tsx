import { ImageGallery } from "../../components/ImageGallery";
import {
  ImageGalleryItem,
  ImageItemProps,
} from "../../components/ImageGalleryItem";
import {
  TextGalleryItem,
  TextItemProps,
} from "../../components/TextGalleryItem";
import F1 from "../../assets/f1.jpg";
import F3 from "../../assets/f3.jpg";
import F4 from "../../assets/f4.jpg";

export type GalleryItem =
  | (ImageItemProps & { component: React.ComponentType<ImageItemProps> })
  | (TextItemProps & { component: React.ComponentType<TextItemProps> });

const Home = () => {
  const firstGallery: GalleryItem[] = [
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
      title: "coffe title",
      subTitle: "this is a subtitle",
      buttonText: "button text",
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
  const secondGallery: GalleryItem[] = [
    {
      title: "coffe title",
      subTitle: "this is a subtitle",
      buttonText: "button text",
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
      src: F4,
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
  return (
    <div>
      <ImageGallery division="half">
        {firstGallery.map((item, index) => {
          const Component = item.component as React.ComponentType<GalleryItem>;
          return <Component key={index} {...item} />;
        })}
      </ImageGallery>
      <ImageGallery division="third">
        {secondGallery.map((item, index) => {
          const Component = item.component as React.ComponentType<GalleryItem>;
          return <Component key={index} {...item} />;
        })}
      </ImageGallery>
    </div>
  );
};

export default Home;
