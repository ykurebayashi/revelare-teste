import styled from "styled-components";

export const MainContent = styled.header`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
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
  height: 75px;
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

export const MenuOptions = styled.aside`
  width: 300px;
  height: 100vh;
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
  animation: slideIn 0.5s forwards;
  background-color: #00754a;

  @keyframes slideIn {
    0% {
      right: -300px;
    }
    100% {
      right: 0;
    }
  }
`;

export const RedirectButtonsConatiner = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`;

export const LinkButton = styled.span`
  position: relative;
  font-weight: bolder;
  font-size: 2em;
  cursor: pointer;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    height: 5px;
    width: 100%;
    background-color: #1f6047;
  }
`;
