import { Link, useParams } from "react-router";
import { useGetSingleCoffee } from "../../../query/useGetCoffees";
import { useCheckMobile } from "../../../utils/useCheckMobile";
import {
  MainContent,
  DrinkImage,
  DrinkTitle,
  FlexDiv,
  Instructions,
  BackPage,
} from "./style";

const DetailedPost = () => {
  const { id } = useParams();
  const { isMobile } = useCheckMobile();

  const { data } = useGetSingleCoffee({ id: id || "" });

  return (
    <MainContent $isMobile={isMobile}>
      <Link to={"/blog"}>
        <BackPage>
          &lt; <span>Voltar</span>
        </BackPage>
      </Link>
      <DrinkTitle>{data?.drinks[0].strDrink}</DrinkTitle>
      <FlexDiv $isMobile={isMobile}>
        <Instructions $isMobile={isMobile}>
          {data?.drinks[0].strInstructions}
        </Instructions>
        <DrinkImage
          $isMobile={isMobile}
          alt="Imagem da bebida"
          src={data?.drinks[0].strDrinkThumb}
        />
      </FlexDiv>
    </MainContent>
  );
};
export default DetailedPost;
