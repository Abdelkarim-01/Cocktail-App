import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter ,singlePageError} from "./pages";
import { loader as landingLoader} from "./pages/Landing";
import { loader as singleCocktailLoader} from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";
import SinglePageError from "./pages/SinglePageError";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        loader : landingLoader(queryClient),
      },
      {
        path:'/Cocktail/:id',
        element: <Cocktail />,
        errorElement:<SinglePageError/>,
        loader : singleCocktailLoader(queryClient),
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

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};
export default App;
