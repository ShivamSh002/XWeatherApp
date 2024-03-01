import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearch = (searhCity) => {
    setCity(searhCity);
    console.log(city);
  };

  return (
    <div>
      {" "}
      <SearchBar onSearch={handleSearch} /> <WeatherDisplay city={city} />
    </div>
  );
};

export default App;
