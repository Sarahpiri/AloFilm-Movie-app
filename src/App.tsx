
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      {/* <Home/> */}
      <MoviePage />
    </div>
  );
}

export default App;
