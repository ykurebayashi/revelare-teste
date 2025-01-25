import { ImageGallery } from "../../components/ImageGallery";
import { gallerySection } from "./constants";
import { GalleryItem } from "./types";

const Home = () => {
  return (
    <div>
      {gallerySection.map((item) => {
        return (
          <ImageGallery division={item.division}>
            {item.galleryItems.map((galleryItem, index) => {
              const Component =
                galleryItem.component as React.ComponentType<GalleryItem>;
              return <Component key={index} {...galleryItem} />;
            })}
          </ImageGallery>
        );
      })}
    </div>
  );
};

export default Home;
