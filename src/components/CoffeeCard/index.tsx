import { RoundInfo } from "../RoundInfo";
import { TitleContainer, Category, MainCard, Title } from "./style";
import { CoffeeCardProps } from "./type";

export const CoffeeCard = ({ title, category, date, img }: CoffeeCardProps) => {
  return (
    <MainCard>
      <TitleContainer>
        <Title>{title}</Title>
        <Category>{category}</Category>
      </TitleContainer>
      <RoundInfo
        alt={`food: ${title}, category: ${category}`}
        background={img}
      />

      <p>{typeof date === "string" ? date : date.toDateString()}</p>
    </MainCard>
  );
};
