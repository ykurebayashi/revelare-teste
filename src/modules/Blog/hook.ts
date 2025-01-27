import { useMemo } from "react";
import { MAX_RENDER } from "./constants";
import { CoffeeSingleType } from "../../query/useGetCoffees";

type useGetBlogPageDataType = {
    page: number;
    data?: {
        drinks: CoffeeSingleType[]
    }
    category: string;
    search: string
}

export const useGetBlogPageData = ({page, data, search, category}: useGetBlogPageDataType) => {
    const usedData = useMemo(() => {
        const startIndex = page * MAX_RENDER;
        const endIndex = startIndex + MAX_RENDER;

        let result = data?.drinks;

        if (category) {
            result = result?.filter((element) => {
            return element.strCategory === category;
            });
        }

        if (search) {
            result = result?.filter((element) =>
            element.strDrink.toLowerCase().includes(search.toLowerCase())
            );
        }

        return result?.slice(startIndex, endIndex);
    }, [data, page, search, category]);

    const categories = useMemo(() => {
        return [...new Set(data?.drinks?.map((element) => element.strCategory))];
    }, [data]);

    return {
        usedData,
        categories
    }
}