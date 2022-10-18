import APP_PATHS from "./app-paths";
import Home from "./pages/home";
import Beers from "./pages/beers";
import NewBeer from "./pages/new-beer";
import RandomBeer from "./pages/random-beer";
import SingleBeer from "./pages/single-beer";

const ROUTES = [
  { path: APP_PATHS.HOME, element: <Home />, name: "Home" },
  {
    path: APP_PATHS.BEERS,
    element: <Beers />,
    name: "Beers",
  },
  {
    path: APP_PATHS.NEW_BEER,
    element: <NewBeer />,
    name: "New Beer",
  },
  {
    path: APP_PATHS.RANDOM_BEER,
    element: <RandomBeer />,
    name: "Random Beer",
  },
  {
    path: APP_PATHS.SINGLE_BEER,
    element: <SingleBeer />,
    name: "Single Beer",
  },
];

export default ROUTES;
