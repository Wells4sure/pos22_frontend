import MainLayout from "./layouts/MainLayout";
import Auth from "./views/Auth/auth";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/errors/NotFound";
import LandingPage from "./views/LandingPage";
import HomeLayout from "./layouts/home/HomeLayout";
import POS from "./views/Pos/Pos";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/login",
        element: <Auth />,
      },
      { path: "/", element: <LandingPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/dashboard",
    element: <HomeLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/pos",
        element: <POS />,
      },
    ],
  },
];

export default routes;
