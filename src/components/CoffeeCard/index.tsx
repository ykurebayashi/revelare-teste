import { formatDate } from "../../utils/useFormatDate";
import {
  TitleContainer,
  Category,
  MainCard,
  Title,
  BottomLeftImage,
  BottomRightText,
  IconsContainer,
  RecipeImage,
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
  index,
}: CoffeeCardProps) => {
  return (
    <MainCard id={`post-${index}`}>
      <RecipeImage alt="Imagem da receite" src={img} />

      <TitleContainer>
        <Link
          to={`/blog/post/${id}`}
          onClick={() => {
            scrollToTop();
          }}
        >
          <Title>{title}</Title>
          <Category>{category}</Category>
        </Link>
      </TitleContainer>

      <BottomRightText>
        <time dateTime={new Date(date).toISOString()}>{formatDate(date)}</time>
      </BottomRightText>
      <IconsContainer>
        <BottomLeftImage alt="Logo do starbucks" src={Logo} />
      </IconsContainer>
    </MainCard>
  );
};
