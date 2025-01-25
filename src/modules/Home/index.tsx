import { ImageGallery } from "../../components/ImageGallery";
import { firstGallery, secondGallery } from "./constants";
import { GalleryItem } from "./types";

const Home = () => {
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
