import styled from "styled-components";

export const MainContent = styled.main`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5%;
  position: relative;
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

export const BackPage = styled.button`
  background: none;
  border: none;
  width: 100px;
  cursor: pointer;
  color: black;
  transform: translateX(15px);
  position: absolute;
  top: 20px;
  left: 30px;

  &:hover {
    color: #1f6047;
    transform: translateX(0px);
    transition: transform 0.3s ease;
  }
`