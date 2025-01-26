import { useGetCoffeeRecipes } from "../../query/useGetCoffees";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useMemo, useState } from "react";
import {
  MainContent,
  PaginationButtons,
  Main,
  PaginationButton,
} from "./style";

const MAX_RENDER = 6;

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();
  const [page, setPage] = useState<number>(0);

  const usedData = useMemo(() => {
    const startIndex = page * MAX_RENDER;
    const endIndex = startIndex + MAX_RENDER;

    return data?.drinks.slice(startIndex, endIndex);
  }, [data, page]);

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
                  alcoholic={element.strAlcoholic !== "Non alcoholic"}
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
          Back
        </PaginationButton>

        <PaginationButton
          disabled={(usedData?.length ?? 0) < 6}
          onClick={() => setPage(page + 1)}
        >
          Next
        </PaginationButton>
      </PaginationButtons>
    </Main>
  );
};

export default Blog;
