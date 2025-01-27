import { useGetCoffeeRecipes } from "../../query/useGetCoffees";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext, useEffect, useMemo, useState } from "react";
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
import { MAX_RENDER } from "./constants";

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();

  const context = useContext(SearchContext);

  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<string>("");

  const usedData = useMemo(() => {
    const startIndex = page * MAX_RENDER;
    const endIndex = startIndex + MAX_RENDER;

    let result = data?.drinks;

    if (category) {
      result = result?.filter((element) => {
        return element.strCategory === category;
      });
    }

    if (context?.search) {
      result = result?.filter((element) =>
        element.strDrink.toLowerCase().includes(context.search.toLowerCase())
      );
    }

    return result?.slice(startIndex, endIndex);
  }, [data, page, context?.search, category]);

  const categories = useMemo(() => {
    return [...new Set(data?.drinks?.map((element) => element.strCategory))];
  }, [data]);

  useEffect(() => {
    setPage(0);
  }, [context?.search, category]);

  return (
    <Main>
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
      <PaginationButtons>
        <PaginationButton
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
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
          onClick={() => setPage(page + 1)}
          $moveRight
        >
          <span>Próxima</span> &gt;
        </PaginationButton>
      </PaginationButtons>
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
