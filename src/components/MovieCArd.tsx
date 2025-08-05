
import { useState } from "react";
import moviePic from "../assets/movie-7.png";
import { Button } from "./ui/button";
import { ClockIcon, StarFilledIcon, TriangleRightIcon } from "@radix-ui/react-icons";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function FlipCard({
  frontContent,
  backContent,
  className = "",
  onClick,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onClick?.();
  };

  return (
    <div
      className={`relative w-[300px] h-[400px] cursor-pointer [perspective:1000px] ${className}`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          {frontContent}
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
}

// Demo/Example Usage
export default function MovieCard() {
  return (
    <div className="rounded-lg bg-gray-950">
      <FlipCard
        frontContent={
          <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img
              src={moviePic}
              alt="movie-poster"
              className="w-full h-80 object-contain mb-2 hover:opacity-[0.9] transition-transform duration-300 shadow-lg rounded-lg"
            />
            <div className="flex items-center justify-between w-full px-4 ">
              <h2 className="text-xl font-bold text-white">Movie Name</h2>
              <p className="text-[#5DE9CC]">2023</p>
            </div>
            <div className="flex items-center justify-between w-full px-4 mt-2">
              <p className="text-gray-600 flex items-center  justify-center text-sm font-bold gap-1 border-r-1 pr-16">
                <ClockIcon
                  style={{
                    color: "#5DE9CC",
                  }}
                />
                128 min
              </p>
              <p className="flex text-gray-600 gap-1 items-center justify-center"><StarFilledIcon style={{
                    color: "#5DE9CC",
                  }}/>8.0</p>
            </div>
          </div>
        }
        backContent={
          <div className="w-full h-full bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Overview</h3>
            <p className="text-gray-600 text-center mb-4">
              Premium comfort with innovative design. Perfect for both casual
              wear and sports activities.
            </p>
            <Button
              variant="outline"
              className="cursor-pointer px-4 py-2 flex items-center text-sm rounded-4xl border-[#5DE9CC] hover:bg-[#5DE9CC] text-white hover:text-black border-2 "
            >
              <span>
                {" "}
                <TriangleRightIcon
                  style={{
                    width: "20px",
                    height: "30px",
                  }}
                />
              </span>
              WATCH NOW
            </Button>
          </div>
        }
      />
    </div>
  );
}
