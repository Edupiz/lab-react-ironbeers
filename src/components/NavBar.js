import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink, useLocation} from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = (props) => {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    props.filterBeers(e.target.value);
  };

  return (
    <Disclosure as="nav" className="bg-blueIPA">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blueIPA-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-600 hover:bg-blueIPA-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/beers"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blueIPA-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-600 hover:bg-blueIPA-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Beers
                    </NavLink>
                    <NavLink
                      to="/random-beer"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blueIPA-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-600 hover:bg-blueIPA-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Random Beer
                    </NavLink>
                    <NavLink
                      to="/new-beer"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-blueIPA-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-600 hover:bg-blueIPA-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      New Beer
                    </NavLink>
                  </div>
                </div>
              </div>
              {location.pathname === "/beers" && (
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search Beers
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-600"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-blueIPA-dark text-white placeholder-white focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-blueIPA-dark sm:text-sm"
                        placeholder="Search Beers"
                        type="search"
                        value={search}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blueIPA-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-600 hover:bg-blueIPA-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/beers"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blueIPA-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-600 hover:bg-blueIPA-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Beers
              </NavLink>
              <NavLink
                to="/random-beer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blueIPA-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-600 hover:bg-blueIPA-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                Random Beer
              </NavLink>
              <NavLink
                to="/new-beer"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blueIPA-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                    : "text-gray-600 hover:bg-blueIPA-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                }
              >
                New Beer
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavBar;