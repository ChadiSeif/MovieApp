import React, { useState } from "react";
import "./../MovieApp/MovieApp.css";
import { Navbar } from "react-bootstrap";
import MovieList from "./../MovieList/MovieList";
import FilterByTitle from "./../FilterByTitle/FilterByTitle";
import FilterByRate from "../FilterByRating/FilterByRating";
import Add from "./../Add/Add";
import MoviesData from "../MoviesData";

const MovieApp = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [Movies, setMovies] = useState(MoviesData);

  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-movie-board-icon-image_1455346.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Welcome to my movie App
          </Navbar.Brand>
        </Navbar>
      </header>
      <div className="filters">
        <FilterByTitle setSearch={setSearch} search={search} />
        <FilterByRate value={value} setValue={setValue} />
      </div>

      <MovieList
        MoviesData={MoviesData}
        Movies={Movies}
        setMovies={setMovies}
        search={search}
        value={value}
      />
      <Add MoviesData={MoviesData} Movies={Movies} setMovies={setMovies} />

      <footer className="footer">Movie App made by SeifChadi</footer>
    </div>
  );
};

export default MovieApp;
