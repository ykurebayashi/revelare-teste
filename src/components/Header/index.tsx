import LogoSrc from "../../assets/logo.png";
import { Menu } from "react-feather";
import {
  MainContent,
  BurgerMenuButton,
  FlexRow,
  Logo,
  SearchInput,
  MenuOptions,
  LinkButton,
  RedirectButtonsConatiner,
} from "./style";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { useOutsideClick } from "../../utils/useGetClickOutside";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsOpen(false));
  return (
    <MainContent>
      <Logo src={LogoSrc} alt="logo" />
      <FlexRow>
        <SearchInput type="text" placeholder="Pesquisar" />
        <BurgerMenuButton onClick={() => setIsOpen(true)} aria-haspopup="true">
          <Menu />
        </BurgerMenuButton>
      </FlexRow>
      {isOpen && (
        <MenuOptions ref={menuRef}>
          <RedirectButtonsConatiner>
            <Link to={"/"} style={{ width: "100%", textAlign: "center" }}>
              <LinkButton>Home</LinkButton>
            </Link>
            <Link to={"/blog"} style={{ width: "100%", textAlign: "center" }}>
              <LinkButton>Blog</LinkButton>
            </Link>
          </RedirectButtonsConatiner>

          <LinkButton onClick={() => setIsOpen(false)}>Close</LinkButton>
        </MenuOptions>
      )}
    </MainContent>
  );
};
