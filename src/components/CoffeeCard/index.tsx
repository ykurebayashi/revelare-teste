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
} from "./style";
import { CoffeeCardProps } from "./type";
import Logo from "../../assets/logo.png";

export const CoffeeCard = ({
  title,
  category,
  date,
  img,
  alcoholic,
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
      <BottomRightText>
        {typeof date === "string" ? formatDate(date) : date.toDateString()}
      </BottomRightText>
      <BottomLeftImage alt="Starbucks logo" src={Logo} />
    </MainCard>
  );
};
