import styled from "styled-components";

export const MainContent = styled.header`
  height: 15dvh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4em;
  border-top: 10px solid #1f6047;
  border-bottom: 1px solid #1f6047;
  background-color: white;
  z-index: 100;
  position: sticky;
  top: 0;
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

export const MenuOptions = styled.div`
  width: 300px;
  height: 100dvh;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 0;
  right: 0;
  padding: 5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const RedirectButtonsConatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`

export const LinkButton = styled.span`
    position: relative;
    font-weight: bolder;
    font-size: 2em;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: 0;
      height: 5px;
      width: 100%;
      background-color: #1f6047;
    }
`