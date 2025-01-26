import { ImageGallery } from "../../components/ImageGallery";
import { RoundInfo } from "../../components/RoundInfo";
import { coffeeButtons, gallerySection } from "./constants";
import {
  WelcomeDiv,
  OptionsDiv,
  SubtitleDescription,
  WelcomeTitle,
  EndDiv,
  BannerImage,
} from "./style";
import { GalleryItem } from "./types";
import Bg4 from "../../assets/bg4.jpg";
import { isMobile } from "../../utils/isMobile";

const Home = () => {
  return (
    <main>
      <WelcomeDiv>
        <div>
          <WelcomeTitle>Starbucks &#174;</WelcomeTitle>
          <WelcomeTitle>Happy Hour</WelcomeTitle>
        </div>
        <SubtitleDescription>
          Encontraremos voce em sua caixa de entrada. Ofertas de bebidas estão a
          caminho
        </SubtitleDescription>
        <OptionsDiv>
          {coffeeButtons.map((element) => {
            return (
              <RoundInfo alt={element.alt} background={element.background} />
            );
          })}
        </OptionsDiv>
      </WelcomeDiv>
      {gallerySection.map((item) => {
        return (
          <ImageGallery
            division={item.division}
            backgroundColor={item.backgroundColor}
            columns={item.columns}
            isMobile={isMobile()}
          >
            {item.galleryItems.map((galleryItem, index) => {
              const Component =
                galleryItem.component as React.ComponentType<GalleryItem>;
              return <Component key={index} {...galleryItem} />;
            })}
          </ImageGallery>
        );
      })}
      <EndDiv>
        <BannerImage src={Bg4} />
      </EndDiv>
    </main>
  );
};

export default Home;
