import { useGetCoffeeRecipes } from "../../query/useGetCoffees";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  MainContent,
  PaginationButtons,
  Main,
  PaginationButton,
  HomepageButton,
} from "./style";
import { SearchContext } from "../../state/searchContext";

const MAX_RENDER = 6;

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();
  const context = useContext(SearchContext);
  const [page, setPage] = useState<number>(0);

  const usedData = useMemo(() => {
    const startIndex = page * MAX_RENDER;
    const endIndex = startIndex + MAX_RENDER;

    const result = data?.drinks.slice(startIndex, endIndex);

    if (context?.search) {
      return result?.filter((element) =>
        element.strDrink.toLowerCase().includes(context.search.toLowerCase())
      );
    }

    return result;
  }, [data, page, context?.search]);

  useEffect(() => {
    setPage(0);
  }, [context?.search]);

  return (
    <Main>
      <MainContent>
        {isLoading ? (
          "Loading"
        ) : (
          <>
            {usedData?.map((element) => {
              return (
                <CoffeeCard
                  title={element.strDrink}
                  date={element.dateModified}
                  img={element.strDrinkThumb || ""}
                  category={element.strCategory}
                  id={element.idDrink}
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
          &lt; <span>Back</span>
        </PaginationButton>

        <HomepageButton disabled={page === 0} onClick={() => setPage(0)}>
          Initial Page
        </HomepageButton>

        <PaginationButton
          disabled={(usedData?.length ?? 0) < 6}
          onClick={() => setPage(page + 1)}
          $moveRight
        >
          <span>Next</span> &gt;
        </PaginationButton>
      </PaginationButtons>
    </Main>
  );
};

export default Blog;
