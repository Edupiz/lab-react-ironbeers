import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  const filterBeers = (searchText) => {
    const beersCopy = [...beers];

    searchText !== ""
      ? setFilteredBeers(
          beersCopy.filter((beer) => beer.name.toLowerCase().includes(searchText.toLowerCase()))
        )
      : setFilteredBeers(beers);
  };

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
      setFilteredBeers(response.data);
    });
  }, []);

  return (
    <div>
      <NavBar filterBeers={filterBeers} />
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
        Check all the beers!
      </h2>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 ">
          {filteredBeers.map((beer) => {
            return (
              <Link
                className="border-2 shadow hover:bg-gray-50 sm:rounded-md"
                to={`/beers/${beer._id}`}
                key={beer._id}
              >
                <div className="flex flex-row justify-around">
                  <img
                    src={beer.image_url}
                    alt="bottle of beer"
                    className="max-w-40 max-h-40 object-center object-cover mb-2 mt-2"
                  />
                  <div className="mt-4 max-w-sm flex flex-col justify-around">
                    <h2 className="text-3xl font-medium">{beer.name}</h2>
                    <h3 className="text-base text-gray-400">{beer.tagline}</h3>
                    <p className="text-sm mb-2">
                      <span className="font-bold">Created by:</span>{" "}
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BeersPage;