import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MoviePage from "./pages/MoviePage";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "movie/:id", Component: MoviePage },
      { path: "watch-list", Component: WatchList },
    ],
  },
  // {
  //   path: "authenticate",
  //   Component: AuthLayout,
  //   children: [
  //     {
  //       path: "users",
  //       Component: AuthPage,
  //     },
  //   ],
  // },
]);

export default router;
