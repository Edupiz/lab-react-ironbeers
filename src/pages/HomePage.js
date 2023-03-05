import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const HomePage = () => {
  return (
      <ul className="space-y-3 flex flex-col items-center mt-2">
        <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md sm:w-3/5">
          <Link to={"/beers"}>
            <img className="mx-auto" src={beers} alt="pub's beer taps"></img>
            <h1 className="text-3xl font-medium">All Beers</h1>
            <p className="text-gray-400 mx-auto sm:w-3/4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eleifend dolor ac aliquam ullamcorper. Aliquam sed facilisis ante,
              at rhoncus risus. Suspendisse ultricies lectus scelerisque lorem
              maximus, vel faucibus nisi.
            </p>
          </Link>
        </li>

        <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md sm:w-3/5">
          <Link to={"/random-beer"}>
            <img className="mx-auto" src={randomBeer} alt="beer taps"></img>
            <h1 className="text-3xl font-medium">Random Beer</h1>
            <p className="text-gray-400 mx-auto sm:w-3/4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eleifend dolor ac aliquam ullamcorper. Aliquam sed facilisis ante,
              at rhoncus risus. Suspendisse ultricies lectus scelerisque lorem
              maximus, vel faucibus nisi.
            </p>
          </Link>
        </li>

        <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md sm:w-3/5">
          <Link to={"/new-beer"}>
            <img className="mx-auto" src={newBeer} alt="bottle and pint of beer"></img>
            <h1 className="text-3xl font-medium">New Beers</h1>
            <p className="text-gray-400 mx-auto sm:w-3/4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eleifend dolor ac aliquam ullamcorper. Aliquam sed facilisis ante,
              at rhoncus risus. Suspendisse ultricies lectus scelerisque lorem
              maximus, vel faucibus nisi.
            </p>
          </Link>
        </li>
      </ul>
  );
};

export default HomePage;