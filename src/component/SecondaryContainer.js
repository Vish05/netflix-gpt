import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.info(movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          {movies.nowPlayingMovies && (
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          )}
          {movies.topRatedMovies && (
            <MovieList title={"Trending"} movies={movies.topRatedMovies} />
          )}
          {movies.popularMovies && (
            <MovieList title={"Popular"} movies={movies.popularMovies} />
          )}
          {movies.upcomingMovies && (
            <MovieList
              title={"Upcoming Movies"}
              movies={movies.upcomingMovies}
            />
          )}
          {movies.nowPlayingMovies && (
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          )}
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
