import styled from "styled-components";

export const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type MainContentType = {
  $width?: string;
  $height?: string;
};

export const MainContent = styled.div<MainContentType>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "100%"};
  background-color: rgba(255, 255, 255);
  position: relative;
  border-radius: 5px;
  padding: 2em;
  animation: showUpFromBottom 0.5s ease-out forwards;

  @keyframes showUpFromBottom {
    0% {
      transform: translate(0%, 200%);
    }
    100% {
      transform: translate(0%, -0%);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
`;
