import styled from "styled-components";

export const Button = styled.div<{ $isMobile?: boolean }>`
  width: ${(props) => (props.$isMobile ? "10vh" : "15vh")};
  height: ${(props) => (props.$isMobile ? "10vh" : "15vh")};
  border-radius: 50%;
  border: 5px solid #1f6047;
  background: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
