import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"
import TeamMembers from "./pages/TeamMembers";
import DoctorProfile from "./pages/DoctorProfile";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "team",
        element: <TeamMembers />,
      },
      {
        path:"doctor",
        element:<DoctorProfile/>
      },
      {
        path: "contact",
        element: <Contact />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
   
    <RouterProvider router={router} />
  </>
);