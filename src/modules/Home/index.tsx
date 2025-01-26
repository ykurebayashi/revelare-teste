import { ImageGallery } from "../../components/ImageGallery";
import { RoundInfo } from "../../components/RoundInfo";
import { gallerySection } from "./constants";
import { GalleryItem } from "./types";
import C1 from "../../assets/c1.jpg";
import C2 from "../../assets/c2.jpg";
import C3 from "../../assets/c3.jpg";

const Home = () => {
  return (
    <main>
      <RoundInfo background={C1} alt="coffe image" />
      <RoundInfo background={C2} alt="coffe image" />
      <RoundInfo background={C3} alt="coffe image" />
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
