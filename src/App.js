import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import SingleBeerPage from "./pages/SingleBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />

      </Routes>
    </div>

  );
}

export default App;
