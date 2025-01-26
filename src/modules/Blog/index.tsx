import { useGetCoffeeRecipes } from "../../query/useGetCoffees";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useMemo } from "react";
import { MainContent } from "./style";

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();

  const usedData = useMemo(() => {
    return data;
  }, [data]);

  return (
    <MainContent>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          {usedData?.drinks.map((element) => {
            return (
              <CoffeeCard
                title={element.strDrink}
                date={element.dateModified}
                img={element.strDrinkThumb || ""}
                category={element.strCategory}
              />
            );
          })}
        </>
      )}
    </MainContent>
  );
};

export default Blog;
