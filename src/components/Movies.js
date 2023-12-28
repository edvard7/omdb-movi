import Movie from './Movie';
import './Movies.scss'

function Movies({ movies }) {

    return (<div className="movies">
        {
            !!movies ?
            
                movies.map(movie => (
                    <Movie key={`${movie.Title}-${movie.Year}`} movie={movie} />
                ))
             :
            <h1>Hothing here</h1>
        }
    </div>)
}

export default Movies;