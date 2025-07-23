import { FilterInput } from "@/components/FilterInput";
import SearchMovieCard from "@/components/SearchMovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchResults = () => {
  return (
    <div className="flex bg-sky-950 p-4 ">
      <div className="w-1/4 flex flex-col gap-4 border-r border-gray-500">
        <p className="text-white font-bold text-xl">Filters</p>
        <div className="flex flex-col gap-2">
          <p className="text-white ">Genre</p>
          <FilterInput
          title="Genre"
            options={[
              {
                value: "Action",
                label: "Action",
              },
              {
                value: "Drama",
                label: "Drama",
              },
              {
                value: "Horror",
                label: "Horror",
              },
              {
                value: "Romance",
                label: "Romance",
              },
              
            ]}
          />
          
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white ">Year</p>
          <FilterInput options={[{
                value: "2019-2026",
                label: "2019-2026",
              },{
                value: "2011-2018",
                label: "2011-2018",
              },{
                value: "2000-2010",
                label: "2000-2010",
              },{
                value: "1960-1999",
                label: "1960-1999",
              },]} title="Year"/>
        </div>
         <div className="flex flex-col gap-2">
          <p className="text-white ">Rating</p>
          <FilterInput options={[{
                value: "8-10",
                label: "8-10",
              },{
                value: "5-8",
                label: "5-8",
              },{
                value: "3-5",
                label: "3-5",
              },{
                value: "1-3",
                label: "1-3",
              },]} title="Rating"/>
        </div>
       <Button className="cursor-pointer text-white w-3/4 flex items-center text-md rounded-4xl border-[#5DE9CC] hover:bg-[#5DE9CC] hover:text-black border-2 ">Apply Filters</Button>
      </div>
      <div className="w-3/4 flex flex-col gap-4 pl-10">
        <div className="flex w-full max-w-sm items-center gap-2 relative">
          <Input
            type="search"
            placeholder="Search"
            style={{ color: "white" }}
          />
          <Button
            variant="ghost"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              border: "1px solid ",
              borderRadius: "0 4px 4px 0",
            }}
            className="hidden cursor-pointer md:flex text-sm font-medium text-gray-300 hover:bg-[#5DE9CC] active:bg-[#b4ffe2] hover:text-black"
          >
            <MagnifyingGlassIcon style={{ width: 25, height: 25 }} />
          </Button>
        </div>
        <p className="text-white">Search Results</p>
        <div className="flex flex-wrap gap-3">
          <SearchMovieCard />
          <SearchMovieCard />
          <SearchMovieCard />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
