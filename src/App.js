import React, { useEffect, useState } from "react";
import "./App.css";
import Recepi from "./recepi";

const App = () => {
  const APP_ID = `703a7b8a`;
  const APP_KEY = `
  29b6a58b70dc535d1c0219b683ffef8d`;

  const [Result, setResult] = useState([]);
  const [Search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const fetching = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await fetching.json();
    setResult(data.hits);
    console.log(data.hits);
  };

  const goSearch = (e) => {
    setSearch(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(Search);
  };

  return (
    <div className="App">

      <h1 style={{color: "white", margin: "30px"}}>Find your favorite food recipe</h1>

      <br/>
      <form>
        <input
          className="recepi"
          type="text"
          value={Search}
          onChange={goSearch}
          placeholder='for example "chicken" '
        />
        <button onClick={getQuery} type="submit">
          search
        </button>
      </form>
      <div className="cards">
        {Result.map((recepi, index) => (
          <Recepi
            title={recepi.recipe.label}
            calori={recepi.recipe.calories}
            img={recepi.recipe.image}
            inger={recepi.recipe.ingredients}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
