import { Route } from "react-router-dom";

// Axios
import axios from "axios";

// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Playspage from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component = {HomePage} />
      <MovieHOC path = "/movie/:id" exact component = {MoviePage} />
      <DefaultHOC path = "/Plays" exact component = {Playspage} />
    </>
  );
}

export default App;
