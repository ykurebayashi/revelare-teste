import { useGetCoffeeRecipes } from "../../query/useGetCoffees";

const Blog = () => {
  const { data, isLoading } = useGetCoffeeRecipes();

  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          {data?.drinks.map((element) => {
            return <p>{element?.strDrink}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Blog;
