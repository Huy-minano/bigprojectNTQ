import Home from "../pages/Home";
import Search from "../pages/Search";
import DefaultLayout from "../layouts/DefaultLayout";
import DetailMovie from "../pages/DetailMovie";
import Person from "../pages/Person/Person";


// privateRoutes
const privateRoutes = [];

// publicRoutes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/search/:searchKey', component: Search, layout: DefaultLayout },
    { path: '/search', component: Search, layout: DefaultLayout },
    { path: '/detailMovie/:idMovie', component: DetailMovie, layout: DefaultLayout },
    { path: '/person/:idPerson', component: Person, layout: DefaultLayout },
]

export { privateRoutes, publicRoutes }