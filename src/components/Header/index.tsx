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
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useOutsideClick } from "../../utils/useGetClickOutside";
import { HeaderProps } from "./type";
import { useDebounce } from "../../utils/useDebounce";

export const Header = ({ search, setSearch }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState(search);

  const menuRef = useRef<HTMLDivElement>(null);

  const debouncedValue = useDebounce(currentValue, 300);

  useOutsideClick(menuRef, () => setIsOpen(false));

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <MainContent>
      <Link to={"/"}>
        <Logo src={LogoSrc} alt="logo" />
      </Link>
      <FlexRow>
        <SearchInput
          type="text"
          placeholder="Pesquisar"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <BurgerMenuButton onClick={() => setIsOpen(true)} aria-haspopup="true">
          <Menu />
        </BurgerMenuButton>
      </FlexRow>
      {isOpen && (
        <MenuOptions ref={menuRef}>
          <RedirectButtonsConatiner>
            <Link
              onClick={() => {
                setIsOpen(false);
                setSearch("");
                setCurrentValue("");
              }}
              to={"/"}
              style={{ width: "100%", textAlign: "center" }}
            >
              <LinkButton>Home</LinkButton>
            </Link>
            <Link
              onClick={() => {
                setIsOpen(false);
                setSearch("");
                setCurrentValue("");
              }}
              to={"/blog"}
              style={{ width: "100%", textAlign: "center" }}
            >
              <LinkButton>Blog</LinkButton>
            </Link>
          </RedirectButtonsConatiner>

          <LinkButton onClick={() => setIsOpen(false)}>Close</LinkButton>
        </MenuOptions>
      )}
    </MainContent>
  );
};
