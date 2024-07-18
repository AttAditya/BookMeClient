import { MovieCard } from "../cards";

export function MovieList({ movies }) {
    return (
        <ul className="movie-list grid grid-cols-7 gap-4">
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            description={movie.description}
                            image={movie.image}
                            rating={movie.rating}
                        />
                    </li>
                ))
            }
        </ul>
    );
}