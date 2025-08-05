import Navbar from "./components/Navbar";

import WatchList from "./pages/WatchList";

// import MoviePage from "./pages/MoviePage";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      {/* <Home/> */}
      {/* <MoviePage /> */}
      {/* <SearchResults /> */}
      {/* <ActorPage /> */}
      <WatchList />
    </div>
  );
}

export default App;
