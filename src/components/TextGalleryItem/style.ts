import styled, { css } from "styled-components";

export const CustomContainer = styled.div<{
    $gridRowStart: number;
    $gridRowEnd: number;
    $gridColumnStart: number;
    $gridColumnEnd: number;
    $background?: string;
  }>`
    width: 100%;
    height: 100%;
    grid-row: ${(props) => `${props.$gridRowStart}/${props.$gridRowEnd}`};
    grid-column: ${(props) =>
      `${props.$gridColumnStart}/${props.$gridColumnEnd}`};
    ${({ $background }) => $background && css`
    background-image: url(${$background});
    background-size: cover;
    `};
`;
  
export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20%;
    height: 100%;
    gap: 1.6em;
`;
  
export const Title = styled.p`
    position: relative;
    font-weight: bolder;
    font-size: 2em;
    &::before {
      content: "";
      position: absolute;
      top: -15px;
      left: 0;
      height: 15px;
      width: 45%;
      background-color: #1f6047;
    }
`;
  
export const Description = styled.p`
    font-size: 1.2em;
    text-align: justify;
`;
  
export const Button = styled.button`
    padding: 0.7em 1.2em;
    text-align: center;
    background: none;
    border: 1px solid #888888;
    box-shadow: 0px 0px 20px -8px #888888;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  
    &:hover {
      transform: translateY(-5px);
    }
`;
  