import { formatDate } from "../../utils/useFormatDate";
import { RoundInfo } from "../RoundInfo";
import {
  TitleContainer,
  Category,
  MainCard,
  Title,
  BottomLeftImage,
  BottomRightText,
  ContainerImage,
  IconsContainer,
  CheckRecipeButton,
} from "./style";
import { CoffeeCardProps } from "./type";
import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import { scrollToTop } from "../../utils/useAutoScroll";

export const CoffeeCard = ({
  title,
  category,
  date,
  img,
  id,
}: CoffeeCardProps) => {
  return (
    <MainCard>
      <TitleContainer>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </TitleContainer>
      <ContainerImage>
        <RoundInfo alt="Imagem da bebida ensinada no post" background={img} />
      </ContainerImage>

      <Link
        to={`/blog/post/${id}`}
        onClick={() => {
          scrollToTop();
        }}
      >
        <CheckRecipeButton>Ver Receita</CheckRecipeButton>
      </Link>
      <BottomRightText>
        <time dateTime={new Date(date).toISOString()}>{formatDate(date)}</time>
      </BottomRightText>
      <IconsContainer>
        <BottomLeftImage alt="Logo do starbucks" src={Logo} />
      </IconsContainer>
    </MainCard>
  );
};
