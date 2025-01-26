import styled from "styled-components";
import { ImageGallery } from "../../components/ImageGallery";
import { RoundInfo } from "../../components/RoundInfo";
import { coffeeButtons, gallerySection } from "./constants";
import { GalleryItem } from "./types";
import Bg from "../../assets/bg.jpg";

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

export const WelcomeDiv = styled.div`
  width: 100%;
  height: 85dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10%;
  padding: 1em 6em;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
`;

export const WelcomeTitle = styled.h1`
  font-size: 6.5em;
`;

export const SubtitleDescription = styled.p`
  font-size: 1.5em;
  width: 40%;
`;

export const OptionsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
`;
