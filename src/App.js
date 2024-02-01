import Movies from './components/Movies';
import { useState, useEffect } from 'react';
import { APIKEY } from './env.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';
import CircularProgress from '@mui/material/CircularProgress'

import './App.scss';

function App() {
  // const [movies, setMovies] = useState ([  ]); 
  const [searchField, setSearchField] = useState('');
  const URL = `https://www.omdbapi.com/?s=${searchField}&apikey=${APIKEY}`
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  function getMovies(){
    // fetchMovies()
    // fetch(encodeURI(URL))
    // .then (res => res.json())
    // .then (movies => setMovies(movies.Search))
    dispatch(fetchData(URL));
  }

  useEffect(getMovies, [dispatch]);
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
      {
        movies.pending ? "Loading..." :
          movies.error ? movies.error :
            <Movies movies={movies.movies} />
      }
    </div>
  );
}


export default App;
