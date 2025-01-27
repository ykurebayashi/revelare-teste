import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 78vh;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em 3em;
  width: 90%;
  padding: 30px;

  @media (min-width: 1450px) {
    width: 70%;
  }

  @media (min-width: 1900px) {
    width: 60%;
  }
`;

export const PaginationButtons = styled.div<{ $index?: number }>`
  width: 100%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f6047;
  height: 7vh;
  padding: 0.5em;
  gap: 25px;
  position: sticky;
  top: 12vh;
  z-index: ${(props) => props.$index ?? 100};
`;
export const PaginationButton = styled.button<{
  $moveRight?: boolean;
  $isMobile?: boolean;
  $isSelected?: boolean;
}>`
  background: none;
  border: none;
  width: 100px;
  height: 100%;
  cursor: pointer;
  color: white;
  font-size: ${(props) => (props.$isSelected ? "1em" : "0.7m")};

  ${({ $isMobile, $moveRight }) =>
    !$isMobile &&
    css`
      transform: translateX(${$moveRight ? "-15px" : "15px"});

      &:hover {
        transform: translateX(0px);
        transition: transform 0.3s ease;
      }
    `}
`;
export const HomepageButton = styled.button`
  background: none;
  border: none;
  width: 100px;
  height: 100%;
  cursor: pointer;
  color: white;
  transform: translateY(0px);

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease;
  }
`;

export const CategoryText = styled.p`
  color: white;
`;
