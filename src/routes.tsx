import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MoviePage from "./pages/MoviePage";
import WatchList from "./pages/WatchList";
import ActorPage from "./pages/ActorPage";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "movie/:id", Component: MoviePage },
      { path: "watch-list", Component: WatchList },
      { path: "/:id", Component: ActorPage },
      { path: "search-result", Component: SearchResults },
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
