import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import MovieHeader from "../../components/MovieHeader/MovieHeader";
import MovieContent from "../../components/MovieContent/MovieContent";
function MovieDetails() {
    const { "movie-id": movieId } = useParams();
    const endpoint = `/movie/${movieId}?language=en-US`;
    const { data, loading, error } = useFetchData(endpoint);

    return (
        <section className="details">
            <div className="container">
                <MovieHeader data={data} />
                <MovieContent data={data} />
            </div>
        </section>
    );
}

export default MovieDetails;
