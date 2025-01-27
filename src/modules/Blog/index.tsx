import { useGetCoffeeRecipes } from "../../query/useGetCoffees";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext, useEffect, useState } from "react";
import {
  MainContent,
  PaginationButtons,
  Main,
  PaginationButton,
  HomepageButton,
  CategoryFilter,
  ListItem,
} from "./style";
import { SearchContext } from "../../state/searchContext";
import { useGetBlogPageData } from "./hook";
import { scrollToTop } from "../../utils/useAutoScroll";
import { useCheckMobile } from "../../utils/useCheckMobile";

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();

  const { isMobile } = useCheckMobile();

  const context = useContext(SearchContext);

  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const { usedData, categories } = useGetBlogPageData({
    category,
    data: data,
    page,
    search: context?.search || "",
  });

  useEffect(() => {
    setPage(0);
  }, [context?.search, category]);

  return (
    <Main>
      <PaginationButtons>
        <PaginationButton
          disabled={page === 0}
          onClick={() => {
            setPage(page - 1);
            scrollToTop();
          }}
          $isMobile={isMobile}
        >
          &lt; <span>Anterior</span>
        </PaginationButton>

        <HomepageButton
          onClick={() => {
            setPage(0);
            setCategory("");
          }}
        >
          Redefinir
        </HomepageButton>

        <PaginationButton
          disabled={(usedData?.length ?? 0) < 6}
          onClick={() => {
            setPage(page + 1);
            scrollToTop();
          }}
          $isMobile={isMobile}
          $moveRight
        >
          <span>Próxima</span> &gt;
        </PaginationButton>
      </PaginationButtons>
      <MainContent>
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {usedData?.map((element, index) => {
              return (
                <CoffeeCard
                  title={element.strDrink}
                  date={element.dateModified}
                  img={element.strDrinkThumb || ""}
                  category={element.strCategory}
                  id={element.idDrink}
                  key={index}
                  index={index + page * 6}
                />
              );
            })}
          </>
        )}
      </MainContent>

      <CategoryFilter>
        <h3>Categorias:</h3>
        <ul>
          {categories.map((element) => {
            return (
              <ListItem
                onClick={() => setCategory(element)}
                $isSelected={element.toLowerCase() === category.toLowerCase()}
                key={element}
              >
                {element}
              </ListItem>
            );
          })}
          <ListItem onClick={() => setCategory("")}>Limpar</ListItem>
        </ul>
      </CategoryFilter>
    </Main>
  );
};

export default Blog;
