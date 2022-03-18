import MainLayout from "./layouts/MainLayout";
import Auth from "./views/Auth/auth";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/errors/NotFound";
import LandingPage from "./views/LandingPage";
import HomeLayout from "./layouts/home/HomeLayout";

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
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;
