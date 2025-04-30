import MoviesList from "../../components/MovieList/MovieList";
import Searchbar from "../../components/SearchBar/SearchBar";

import s from "./movies.module.css";

function Movies() {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Movies</h1>
                    <Searchbar />
                    <MoviesList />
                </div>
            </div>
        </section>
    );
}

export default Movies;
