// import React, {
//   createContext,
//   useState,
//   useContext,
//   useRef,
//   useEffect,
// } from "react";

// const MovieCArd = () => {
//   // Utility function to merge classes
//   const cn = (...classes: (string | undefined)[]) => {
//     return classes.filter(Boolean).join(" ");
//   };

//   // Context for mouse enter state
//   const MouseEnterContext = createContext<
//     [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
//   >(undefined);

//   // Hook to use mouse enter context
//   const useMouseEnter = () => {
//     const context = useContext(MouseEnterContext);
//     if (context === undefined) {
//       throw new Error("useMouseEnter must be used within a MouseEnterProvider");
//     }
//     return context;
//   };

//   // Card Container Component
//   const CardContainer = ({
//     children,
//     className,
//     containerClassName,
//   }: {
//     children?: React.ReactNode;
//     className?: string;
//     containerClassName?: string;
//   }) => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isMouseEntered, setIsMouseEntered] = useState(false);

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//       if (!containerRef.current) return;
//       const { left, top, width, height } =
//         containerRef.current.getBoundingClientRect();
//       const x = (e.clientX - left - width / 2) / 25;
//       const y = (e.clientY - top - height / 2) / 25;
//       containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//     };

//     const handleMouseEnter = () => setIsMouseEntered(true);
//     const handleMouseLeave = () => {
//       if (!containerRef.current) return;
//       setIsMouseEntered(false);
//       containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     };

//     return (
//       <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
//         <div
//           className={cn(
//             "py-20 flex items-center justify-center",
//             containerClassName,
//           )}
//           style={{ perspective: "1000px" }}
//         >
//           <div
//             ref={containerRef}
//             onMouseEnter={handleMouseEnter}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className={cn(
//               "flex items-center justify-center relative transition-all duration-200 ease-linear",
//               className,
//             )}
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             {children}
//           </div>
//         </div>
//       </MouseEnterContext.Provider>
//     );
//   };

//   // Card Body Component
//   const CardBody = ({
//     children,
//     className,
//   }: {
//     children: React.ReactNode;
//     className?: string;
//   }) => {
//     return (
//       <div
//         className={cn(
//           "w-[280px] [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
//           className,
//         )}
//       >
//         {children}
//       </div>
//     );
//   };

//   // Card Item Component
//   const CardItem = ({
//     as: Tag = "div",
//     children,
//     className,
//     translateX = 0,
//     translateY = 0,
//     translateZ = 0,
//     rotateX = 0,
//     rotateY = 0,
//     rotateZ = 0,
//     ...rest
//   }: {
//     as?: React.ElementType;
//     children: React.ReactNode;
//     className?: string;
//     translateX?: number | string;
//     translateY?: number | string;
//     translateZ?: number | string;
//     rotateX?: number | string;
//     rotateY?: number | string;
//     rotateZ?: number | string;
//     [key: string]: any;
//   }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [isMouseEntered] = useMouseEnter();

//     useEffect(() => {
//       if (!ref.current) return;
//       if (isMouseEntered) {
//         ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//       } else {
//         ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//       }
//     }, [
//       isMouseEntered,
//       translateX,
//       translateY,
//       translateZ,
//       rotateX,
//       rotateY,
//       rotateZ,
//     ]);

//     return (
//       <Tag
//         ref={ref}
//         className={cn("w-fit transition duration-200 ease-linear", className)}
//         {...rest}
//       >
//         {children}
//       </Tag>
//     );
//   };

//   // Main Component Render
//   return (
//     <div className="w-full h-full bg-black flex items-center justify-center">
//       <CardContainer className="inter-var">
//         <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] rounded-xl p-6 border h-[400px]">
//           <CardItem translateZ="50" className="text-xl font-bold text-white">
//             Pre-Workout Plus
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="60"
//             className="text-neutral-300 text-sm max-w-sm mt-2"
//           >
//             Energy & Focus
//           </CardItem>
//           <CardItem translateZ="100" className="w-full mt-4">
//             <img
//               src="https://images.unsplash.com/photo-1594882645126-14020914d58d?w=500&h=500&fit=crop"
//               className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl opacity-90"
//               alt="Pre-workout"
//             />
//           </CardItem>
//           <div className="flex justify-between items-center mt-4">
//             <CardItem
//               translateZ={20}
//               as="p"
//               className="text-xl font-bold text-white"
//             >
//               $49.99
//             </CardItem>
//             <CardItem
//               translateZ={20}
//               as="button"
//               className="px-4 py-2 rounded-xl bg-white text-black text-sm font-bold hover:bg-gray-200"
//             >
//               Buy Now
//             </CardItem>
//           </div>
//         </CardBody>
//       </CardContainer>
//     </div>
//   );
// };

// export default MovieCArd;

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
export default function FlippingProductCard() {
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
