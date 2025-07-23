import ActorSlider from "@/components/ActorSlider";
import hero from "../assets/hero-bg.jpg";
import FlippingProductCard from "@/components/MovieCArd";
import { Button } from "@/components/ui/button";
const MoviePage = () => {
  return (
    <div className="bg-sky-950  p-18 gap-10 flex flex-col">
      <img src={hero} alt="movie-poster" className=" rounded-[25px]" />
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et
        delectus voluptates non autem adipisci itaque, ipsam ipsum. Accusantium
        aut earum distinctio omnis aliquam ab adipisci tempore sunt quisquam
        animi?
      </p>
      <div>
        <Button>Add to Favorite</Button>
        <Button>Add to Watchlist</Button>
      </div>
      <p className="text-white font-bold text-2xl">Overview</p>
      <div className="grid grid-row-1 gap-4 text-white w-full">
        <div className="flex w-1/2 justify-between border-b-1 border-gray-600 pb-2">
          <p className="text-gray-400">Release Year</p>
          <p>2023</p>
        </div>

        <div className="flex w-1/2 justify-between border-b-1 border-gray-600 pb-2">
          <p className="text-gray-400">Genres</p>
          <p>Fantasy,Adventure,Drama</p>
        </div>

        <div className="flex w-1/2 justify-between border-b-1 border-gray-600 pb-2">
         
          <p className="text-gray-400">Rating</p>
          <p>7.8/10</p>
        </div>
      </div>
      <p className="text-white font-bold text-2xl">Cast & Crew</p>
      <div className="flex gap-3">
        <ActorSlider />
        <ActorSlider />
        <ActorSlider />
        <ActorSlider />
      </div>
      <p className="text-white font-bold text-2xl">Trailer</p>
      <div></div>
      <p className="text-white font-bold text-2xl">You Might Also Like</p>
      <div className="flex items-center bg-gray-950 gap-3 ">
        <FlippingProductCard />
        <FlippingProductCard />
        <FlippingProductCard />
       
      </div>
      
    </div>
  );
};

export default MoviePage;
