import { ImageGallery } from "../../components/ImageGallery";
import { RoundInfo } from "../../components/RoundInfo";
import { coffeeButtons, gallerySection } from "./constants";
import {
  WelcomeSection,
  OptionsDiv,
  SubtitleDescription,
  WelcomeTitle,
  EndSection,
  BannerImage,
} from "./style";
import { GalleryItem } from "./types";
import Bg4 from "../../assets/bg4.jpg";
import { useCheckMobile } from "../../utils/useCheckMobile";

const Home = () => {
  const { isMobile } = useCheckMobile();

  return (
    <main>
      <WelcomeSection id="section-welcome" $isMobile={isMobile}>
        <div>
          <WelcomeTitle $isMobile={isMobile}>Starbucks &#174;</WelcomeTitle>
          <WelcomeTitle $isMobile={isMobile}>Happy Hour</WelcomeTitle>
        </div>
        <SubtitleDescription $isMobile={isMobile}>
          Encontraremos voce em sua caixa de entrada. Ofertas de bebidas estão a
          caminho
        </SubtitleDescription>
        <OptionsDiv>
          {coffeeButtons.map((element) => {
            return (
              <RoundInfo
                isMobile={isMobile}
                alt={element.alt}
                background={element.background}
              />
            );
          })}
        </OptionsDiv>
      </WelcomeSection>
      {gallerySection.map((item, index) => {
        return (
          <ImageGallery
            division={item.division}
            backgroundColor={item.backgroundColor}
            columns={item.columns}
            isMobile={isMobile}
            id={`section-${index}`}
          >
            {item.galleryItems.map((galleryItem, index) => {
              const Component =
                galleryItem.component as React.ComponentType<GalleryItem>;
              return <Component key={index} {...galleryItem} />;
            })}
          </ImageGallery>
        );
      })}
      {!isMobile && (
        <EndSection id="section-end">
          <BannerImage src={Bg4} alt="Armário com acessórios para café e chá" />
        </EndSection>
      )}
    </main>
  );
};

export default Home;
