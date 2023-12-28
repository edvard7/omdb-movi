import './Movie.scss'

function Movie ({ movie }) {
    let {Poster, Title, Year} = movie;

    return (<div className="movie movie-card">
        <img className='movie__poster' src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
    </div>)
}

export default Movie;