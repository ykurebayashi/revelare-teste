import styled from "styled-components";

export const MainContent = styled.main`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5%;
`;

export const DrinkTitle = styled.h1`
  position: relative;
  font-weight: bolder;
  font-size: 1.5em;
  margin-bottom: 30px;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    height: 10px;
    width: 45%;
    background-color: #1f6047;
  }
`;

export const Instructions = styled.p<{$isMobile?: boolean}>`
  width: ${props => props.$isMobile ? '100%': '50%'};
  text-align: justify;
`;

export const FlexDiv = styled.div<{$isMobile?: boolean}>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow: scroll;
  flex-direction: ${props => props.$isMobile ? 'column': 'row'};
`;

export const DrinkImage = styled.img<{$isMobile?: boolean}>`
  width: ${props => props.$isMobile ? '100%': '50%'};
  height: 100%;
  object-fit: contain;
`;
