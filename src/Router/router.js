
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Portfolio/Details";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Qualification from "../Pages/Qualification/Qualification";
import Services from "../Pages/Services/Services";
import Skill from "../Pages/Skill/Skill";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/skill",
                element: <Skill></Skill>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/portfolio",
                element: <Portfolio></Portfolio>
            },
            {
                path: "/qualification",
                element: <Qualification></Qualification>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            
            {
                path: "/data/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://portfolio-web-ishart-server.vercel.app/data/${params.id}`)
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
         
      
           
            
        ],
        
    },
   
  
])