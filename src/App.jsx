import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter} from "./pages";

const App = () => {
  const  router =createBrowserRouter([
    {
      path:'/',
      element: <HomeLayout /> ,
      children:[
        {
          index:'/about' ,
          element: <About />
        },
        {
          path:'/about' ,
          element: <About />
        },
        {
          path:'/newsletter',
          element: <Newsletter />
        },
        {
          path:'/Cocktail',
          element: <Cocktail />
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
};
export default App;
