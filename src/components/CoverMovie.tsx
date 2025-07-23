import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, TriangleRightIcon } from "@radix-ui/react-icons";

const CoverMovie = () => {
  return (
    <div className="flex flex-col items-start justify-center p-16 gap-6 bg-gray-900 text-white">
      <h1 className="text-5xl">Movie name</h1>
      <div className="flex flex-row gap-10 items-center justify-center ">
        <p>Romance, Drama</p>
        <p className="flex gap-2 items-center justify-center"><CalendarIcon style={{
            color: "#5DE9CC",
        }}/>2023</p>
        <p className="flex gap-2 items-center justify-center" ><ClockIcon style={
            {
                color: "#5DE9CC",
            }
        }/>128 min</p>
      </div>
      <Button variant="outline" className="cursor-pointer px-8 py-7 flex items-center text-lg rounded-4xl border-[#5DE9CC] hover:bg-[#5DE9CC] hover:text-black border-2 ">
       <span> <TriangleRightIcon style={{
        width: "30px",
        height: "40px",
       }} /></span>
        WATCH NOW
      </Button>
    </div>
  );
};

export default CoverMovie;
