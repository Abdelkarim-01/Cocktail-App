import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter ,singlePageError} from "./pages";
import { loader as landingLoader} from "./pages/Landing";
import { loader as singleCocktailLoader} from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import SinglePageError from "./pages/SinglePageError";
const App = () => {
  const  router =createBrowserRouter([
    {
      path:'/',
      element: <HomeLayout /> ,
      errorElement:<Error />,
      children:[
        {
          index:true ,
          element: <Landing />,
          errorElement:<SinglePageError/>,
          loader : landingLoader,
        },
        {
          path:'/Cocktail/:id',
          element: <Cocktail />,
          errorElement:<SinglePageError/>,
          loader : singleCocktailLoader,
        },
        {
          path:'/about' ,
          element: <About />
        },
        {
          path:'/newsletter',
          action: newsletterAction,
          element: <Newsletter />,
          
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
};
export default App;
