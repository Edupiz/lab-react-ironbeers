import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const RandomBeerPage = () => {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <img className="mx-auto object-cover max-w-xs max-h-96" src={beer.image_url} alt="bottle of beer" />
        </div>
        <div className="flex flex-row justify-between mt-5 w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/3">
          <h2 className="text-3xl font-medium">{beer.name}</h2>
          <h2 className="text-3xl font-normal text-gray-400">
            {beer.attenuation_level}
          </h2>
        </div>
        <div className="flex flex-row justify-between  mt-5 w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/3">
          <h3 className="text-xl font-normal text-gray-400">{beer.tagline}</h3>
          <p className="font-bold">{beer.first_brewed}</p>
        </div>
        <div className="flex flex-col items-center mt-5 w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/3">
          <p className="text-left font-bold">{beer.description}</p>
          <p className="mt-5 font-normal text-gray-400">{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomBeerPage;