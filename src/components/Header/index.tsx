import LogoSrc from "../../assets/logo.png";
import { Menu } from "react-feather";
import {
  MainContent,
  BurgerMenuButton,
  FlexRow,
  Logo,
  SearchInput,
} from "./style";
import { HeaderProps } from "./type";

export const Header = ({ onClickMenu }: HeaderProps) => {
  return (
    <MainContent>
      <Logo src={LogoSrc} alt="logo" />
      <FlexRow>
        <SearchInput type="text" placeholder="Pesquisar" />
        <BurgerMenuButton onClick={onClickMenu} aria-haspopup="true">
          <Menu />
        </BurgerMenuButton>
      </FlexRow>
    </MainContent>
  );
};
