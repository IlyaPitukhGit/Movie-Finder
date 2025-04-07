import { NavLink } from "react-router-dom";

function MovieHeader({ data }) {
    const { backdrop_path } = data;
    if (!data) return <p>Loading content...</p>;

    const image = backdrop_path
        ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";
    return (
        <div className="details__header">
            <div
                className="details__background"
                style={{ backgroundImage: image }}
            >
                <div className="details__name">
                    <NavLink></NavLink>/ <NavLink></NavLink>
                    <h1 className="details__title"></h1>
                </div>
            </div>
        </div>
    );
}
export default MovieHeader;
