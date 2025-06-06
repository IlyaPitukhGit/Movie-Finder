import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

import s from "./movieDetails.module.css";

import MovieHeader from "../../components/MovieHeader/MovieHeader";
import MovieContent from "../../components/MovieContent/MovieContent";
import TVContent from "../../components/MovieContent/TVContent";

function MovieDetails() {
    const { type, movieId } = useParams();

    const endpoint = `/${type}/${movieId}?language=en-US`;

    const { data, loading, error } = useFetchData(endpoint);

    return (
        <section className={s.details}>
            <div className={s.container}>
                <MovieHeader data={data} />
                {type === "movie" ? (
                    <MovieContent data={data} />
                ) : (
                    <TVContent data={data} />
                )}
            </div>
        </section>
    );
}

export default MovieDetails;
