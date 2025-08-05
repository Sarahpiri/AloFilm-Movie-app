import MovieCard from "@/components/MovieCard";
import { WatchListPagination } from "@/components/WatchlistPagination";
import WatchListTabs from "@/components/WatchlistTabs";

const WatchList = () => {
  return (
    <div className="bg-gray-950  p-12 flex flex-col gap-10 items-start justify-center">
      <p className="text-white font-bold text-2xl">My Watchlist</p>
      <WatchListTabs />
      <div className="flex flex-wrap gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <WatchListPagination />
    </div>
  );
};

export default WatchList;
