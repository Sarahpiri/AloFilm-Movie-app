import Navbar from "./components/Navbar";
import ActorPage from "./pages/ActorPage";
import SearchResults from "./pages/SearchResults";
// import MoviePage from "./pages/MoviePage";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      {/* <Home/> */}
      {/* <MoviePage /> */}
      {/* <SearchResults /> */}
      <ActorPage />
    </div>
  );
}

export default App;
