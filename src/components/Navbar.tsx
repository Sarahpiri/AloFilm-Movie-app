// import {
//   GlobeIcon,
//   MagnifyingGlassIcon,
//   PersonIcon,
// } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import logo from "../assets/Gemini_Generated_Image_jj4gakjj4gakjj4g (1).png";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 gap-3 md:gap-0">
//           {/* Logo */}

//           <img src={logo} alt="AloFilm Logo" className="h-15 w-auto md:h-50" />

//           {/* Center nav */}
//           <div className="hidden md:flex md:items-center md:space-x-8">
//             <a
//               href="#"
//               className="text-sm font-medium text-white hover:text-[#5DE9CC]"
//             >
//               HOME
//             </a>
//             <a
//               href="#"
//               className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
//             >
//               MOVIE
//             </a>
//             <a
//               href="#"
//               className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
//             >
//               TV SHOW
//             </a>
//             <a
//               href="#"
//               className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
//             >
//               WATCH LIST
//             </a>
//           </div>

//           {/* Right section */}
//           <div className="flex items-center gap-2 md:gap-4">
//             <Button
//               variant="ghost"
//               className="hidden md:flex text-sm font-medium text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
//             >
//               <MagnifyingGlassIcon
//                 style={{ width: 25, height: 25 }}
//                 className=" text-gray-300 "
//               />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
//             >
//               <GlobeIcon style={{ width: 25, height: 25 }} />
//             </Button>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className="flex items-center gap-3 rounded-full border-[#5DE9CC] border-2 px-3 py-1.5 hover:bg-[#5DE9CC] bg-black text-white"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="4" y1="6" x2="20" y2="6" />
//                     <line x1="4" y1="12" x2="20" y2="12" />
//                     <line x1="4" y1="18" x2="20" y2="18" />
//                   </svg>
//                   <PersonIcon className="h-6 w-6 rounded-full bg-gray-700 text-white p-1" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48 z-50 bg-sky-950">
//                 <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
//                   Sign up
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
//                   Log in
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
//                   Help Center
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
//                   Contact
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import {
  GlobeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import logo from "../assets/Gemini_Generated_Image_jj4gakjj4gakjj4g (1).png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 md:gap-0">
          {/* Logo */}
          <img src={logo} alt="AloFilm Logo" className="h-15 w-auto md:h-50" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#"
              className="text-sm font-medium text-white hover:text-[#5DE9CC]"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
            >
              MOVIE
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
            >
              TV SHOW
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
            >
              WATCH LIST
            </a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              className="hidden md:flex text-sm font-medium text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
            >
              <MagnifyingGlassIcon
                style={{ width: 25, height: 25 }}
                className="text-gray-300"
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
            >
              <GlobeIcon style={{ width: 25, height: 25 }} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden md:flex items-center gap-3 rounded-full border-[#5DE9CC] border-2 px-3 py-1.5 hover:bg-[#5DE9CC] bg-black text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                  <PersonIcon className="h-6 w-6 rounded-full bg-gray-700 text-white p-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 z-50 bg-sky-950">
                <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                  Sign up
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                  Log in
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                  Help Center
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <Cross1Icon style={{ width: 25, height: 25 }} />
              ) : (
                <HamburgerMenuIcon style={{ width: 25, height: 25 }} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 px-2 pt-2">
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-white hover:text-[#5DE9CC]"
              >
                HOME
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
              >
                MOVIE
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
              >
                TV SHOW
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#5DE9CC]"
              >
                WATCH LIST
              </a>
            </div>
            <div className="flex items-center gap-2 px-2 pt-4">
              <Button
                variant="ghost"
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-[#5DE9CC]"
              >
                <MagnifyingGlassIcon
                  style={{ width: 25, height: 25 }}
                  className="text-gray-300"
                />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-3 rounded-full border-[#5DE9CC] border-2 px-3 py-1.5 hover:bg-[#5DE9CC] bg-black text-white"
                  >
                    <PersonIcon className="h-6 w-6 rounded-full bg-gray-700 text-white p-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 z-50 bg-sky-950"
                >
                  <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                    Sign up
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                    Log in
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                    Help Center
                  </DropdownMenuItem>
                  <DropdownMenuItem className="font-medium hover:bg-[#5DE9CC] hover:text-black cursor-pointer text-white">
                    Contact
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
