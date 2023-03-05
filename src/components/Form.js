import { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";


const Form = () => {
  const [name, setName] = useState("");
  const [tagline, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagLine("");
        setDescription("");
        setFirstBrewed("");
        setBrewerTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        navigate('/beers');
      });
  };
  return (
    <form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="tagline"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Tagline
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    onChange={(e) => setTagLine(e.target.value)}
                    value={tagline}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="max-w-lg shadow-sm block w-full focus:ring-blueIPA-dark  focus:border-blueIPA-dark sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="brewed"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                First Brewed
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="brewed"
                    id="brewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={firstBrewed}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="tips"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Brewers Tips
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="tips"
                    id="tips"
                    onChange={(e) => setBrewerTips(e.target.value)}
                    value={brewerTips}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="attenuation"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Attenuation Level
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="attenuation"
                    id="attenuation"
                    onChange={(e) =>
                      setAttenuationLevel(e.target.value)
                    }
                    value={attenuationLevel}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="contributed"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Contributed By
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm ">
                  <input
                    type="text"
                    name="contributed"
                    id="contributed"
                    onChange={(e) => setContributedBy(e.target.value)}
                    value={contributedBy}
                    className="flex-1 block  w-full focus:ring-blueIPA-dark focus:border-blueIPA-dark min-w-0 rounded-r-md sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-center">
          <Link to={`/`}>
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blueIPA-dark/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blueIPA hover:bg-blueIPA-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Beer
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;