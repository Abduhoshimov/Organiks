import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { ShopSingle } from "../pages/ShopSingle";
import { Projects } from "../pages/Projects";
import { News } from "../pages/News";
import { NotFound } from "../pages/NotFound";


export const mainPage = [
    {
        component: <Home />,
        path: "/"
    },
    {
        component: <About />,
        path: "/about"
    },
    {
        component: <Shop />,
        path: "/shop"
    },
    {
        component: <ShopSingle />,
        path: "/shopsingle"
    },
    {
        component: <Projects />,
        path: "/projects"
    },
    {
        component: <News />,
        path: "/news"
    },
    {
        component: <NotFound />,
        path: "*"
    },
]