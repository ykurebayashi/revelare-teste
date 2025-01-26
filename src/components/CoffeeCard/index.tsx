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
        <RoundInfo
          alt={`food: ${title}, category: ${category}`}
          background={img}
        />
      </ContainerImage>

      <Link to={`/blog/post/${id}`}>
        <CheckRecipeButton>Check Recipe</CheckRecipeButton>
      </Link>
      <BottomRightText>
        {typeof date === "string" ? formatDate(date) : date.toDateString()}
      </BottomRightText>
      <IconsContainer>
        <BottomLeftImage alt="Starbucks logo" src={Logo} />
      </IconsContainer>
    </MainCard>
  );
};
