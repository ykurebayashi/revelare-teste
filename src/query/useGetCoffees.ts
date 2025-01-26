import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const getCoffeeRecipes = async() => {
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee');
    return data;
}

export const useGetCoffeeRecipes = () => {
    return useQuery({ queryKey: ['get_all_coffee'], queryFn: () =>getCoffeeRecipes() })
}