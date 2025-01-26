import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

export const WelcomeDiv = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  height: 85dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10%;
  padding: ${props => props.$isMobile ? '1em 2em' : '1em 6em'};;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
`;

export const WelcomeTitle = styled.h1<{ $isMobile: boolean }>`
  font-size: ${props => props.$isMobile ? '4em' : '6.5em'};
`;

export const SubtitleDescription = styled.p<{ $isMobile: boolean }>`
  font-size: 1.5em;
  width: ${props => props.$isMobile ? '100%' : '40%'};
`;

export const OptionsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
`;

export const EndDiv = styled.div`
  width: 100%;
  height: 85vh;
  padding: 0 5em;
  background-color: #e7e9ed;
`
export const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`