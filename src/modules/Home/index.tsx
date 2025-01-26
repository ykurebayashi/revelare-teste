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
import { Modal } from "../../components/Modal";
import { useState } from "react";
import { TextGalleryItem } from "../../components/TextGalleryItem";

const Home = () => {
  const { isMobile } = useCheckMobile();
  const [modalInfo, setModalInfo] = useState<number | null>(null);
  console.log(modalInfo);

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
          {coffeeButtons.map((element, index) => {
            return (
              <RoundInfo
                key={`button-round-${index}`}
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
            key={`section-${index}`}
          >
            {item.galleryItems.map((galleryItem, itemIndex) => {
              const Component =
                galleryItem.component as React.ComponentType<GalleryItem>;

              return (
                <Component
                  key={`button-round-${itemIndex}`}
                  {...galleryItem}
                  buttonClick={() => setModalInfo(index + 1)}
                />
              );
            })}
          </ImageGallery>
        );
      })}
      {!isMobile && (
        <EndSection id="section-end">
          <BannerImage src={Bg4} alt="Armário com acessórios para café e chá" />
        </EndSection>
      )}

      {!!modalInfo && (
        <Modal
          onClose={() => {
            setModalInfo(null);
          }}
          width={isMobile ? "90%" : "50%"}
          height={isMobile ? "60dvh" : "40dvh"}
        >
          <TextGalleryItem
            title="Lorem Ipsum Dolor"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget odio non arcu feugiat imperdiet nec sed leo. Sed lectus mauris, fringilla sit amet accumsan at, pellentesque vitae ipsum. Nullam"
            buttonClick={() => setModalInfo(null)}
            buttonText="Fechar"
          />
        </Modal>
      )}
    </main>
  );
};

export default Home;
