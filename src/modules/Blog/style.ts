import styled from "styled-components";

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

export const PaginationButtons = styled.div`
  width: 100%;
  border-bottom: 1px solid #1f6047;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f6047;
  height: 7vh;
  padding: 0.5em;
  gap: 5px;
  position: sticky;
  top: 12vh;
  z-index: 100;
`;
export const PaginationButton = styled.button<{ $moveRight?: boolean }>`
  background: none;
  border: none;
  width: 100px;
  height: 100%;
  cursor: pointer;
  color: white;
  transform: translateX(${(props) => (props.$moveRight ? "-15px" : "15px")});

  &:hover {
    transform: translateX(0px);
    transition: transform 0.3s ease;
  }
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

export const CategoryFilter = styled.aside`
  position: absolute;
  right: 0;
  top: 25%;
  border: 1px solid #1f6047;
  padding: 10px;
  background-color: white;

  h3 {
    padding-bottom: 5px;
    color: #1f6047;
  }
`;

export const ListItem = styled.li<{ $isSelected?: boolean }>`
  color: #1f6047;
  font-size: ${(props) => (props.$isSelected ? "1em" : "0.8em")};
  margin-left: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.$isSelected ? "700" : "400")};
`;
