import Movies from './components/Movies';
import { useState, useEffect } from 'react';
import { APIKEY } from './env.js';

import './App.scss';

function App() {
  const [movies, setMovies] = useState ([  ]); 
  const [searchField, setSearchField] = useState('');
  const URL = `https://www.omdbapi.com/?s=${searchField}&apikey=${APIKEY}`

  //   {
  //   Title: "Star Wars: Episode IV - A New Hope",
  //   Year: "1977",
  //   Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  // }

  // --- Разобраться как сделать ---
  // async function fetchMovies(){
  //   const data = await fetch(URL);
  //   const movies = data.json();
  //   setMovies(movies.Search);
  // }

  function getMovies(){
    // fetchMovies()
    fetch(encodeURI(URL))
    .then (res => res.json())
    .then (movies => setMovies(movies.Search))
  }

  useEffect(getMovies, []);
  useEffect(getMovies, [searchField]);

  let timer;
  function handleChange(event){
  clearTimeout(timer);

    setTimeout(() => {
    setSearchField(event.target.value)
  }, 3000)
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <Movies movies={movies} />
    </div>
  );
}


export default App;
