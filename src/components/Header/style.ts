import styled from "styled-components";

export const MainContent = styled.header`
  height: 15dvh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  border-top: 10px solid green;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60%;
  width: auto;
`;

export const SearchInput = styled.input`
  padding: 0.5em;
  border-radius: 0px;
  border: 1px solid #888888;
  position: relative;
`;

export const BurgerMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
