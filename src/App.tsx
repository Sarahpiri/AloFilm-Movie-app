// import Navbar from "./components/Navbar";

// function App() {
//   return <div className="w-full h-screen"></div>;
// }

import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
