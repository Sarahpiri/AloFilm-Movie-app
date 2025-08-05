import FlippingProductCard from "./MovieCard";

const UpcomingMovies = () => {
  return (
    <div className="bg-gray-950 pt-8 flex flex-col pb-10">
      <p className="text-white p-4 text-4xl font-bold py-10">Upcoming Movies</p>
      <div className="flex items-center bg-gray-950 gap-3 pl-2">
        <FlippingProductCard />
        <FlippingProductCard />
        <FlippingProductCard />
        <FlippingProductCard />
      </div>
    </div>
  );
};

export default UpcomingMovies;
