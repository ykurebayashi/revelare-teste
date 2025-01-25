import  Blog from "../modules/Blog";
import  DetailedPost  from "../modules/Blog/Detail";
import Home from "../modules/Home";


export const RoutesList = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "blog",
        element: Blog,
    },
    { 
        path: "blog/post/:id",
        element: DetailedPost,
    }
]