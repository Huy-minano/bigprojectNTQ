import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Search from "../pages/Search";
import DefaultLayout from "../layouts/DefaultLayout";
import DetailMovie from "../pages/DetailMovie";


// privateRoutes
const privateRoutes = [];

// publicRoutes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/movies', component: Movies, layout: DefaultLayout },
    { path: '/detailMovie/:idMovie', component: DetailMovie, layout: DefaultLayout },
    { path: '/search/:searchKey', component: Search, layout: DefaultLayout },
    { path: '/search/', component: Search, layout: DefaultLayout },
]

export { privateRoutes, publicRoutes }