import { ImageGallery } from "../../components/ImageGallery";
import { RoundInfo } from "../../components/RoundInfo";
import { coffeeButtons, gallerySection } from "./constants";
import { GalleryItem } from "./types";

const Home = () => {
  return (
    <main>
      {coffeeButtons.map((element) => {
        return <RoundInfo alt={element.alt} background={element.background} />;
      })}
      {gallerySection.map((item) => {
        return (
          <ImageGallery
            division={item.division}
            backgroundColor={item.backgroundColor}
            columns={item.columns}
          >
            {item.galleryItems.map((galleryItem, index) => {
              const Component =
                galleryItem.component as React.ComponentType<GalleryItem>;
              return <Component key={index} {...galleryItem} />;
            })}
          </ImageGallery>
        );
      })}
    </main>
  );
};

export default Home;
