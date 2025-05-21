import { NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import Icon from "../icons/Icon";

import s from "./movieHeader.module.css";

function MovieHeader({ data }) {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/");

    if (!data) return <p>Loading content...</p>;
    const { backdrop_path, title, name, poster_path } = data;

    const image = backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
        : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png";
    return (
        <div className={s.details__header}>
            <div
                className={s.details__background}
                style={{
                    background: `linear-gradient(180deg, rgba(54, 44, 146, 0.40) 0%, rgba(18, 98, 151, 0.40) 100%), url(${image}) no-repeat 50% 20% / cover`,
                }}
            >
                <div className={s.details__name}>
                    <NavLink
                        to={backLinkLocationRef.current}
                        className={s.details_breadLink}
                    >
                        <span>
                            <Icon name="arrow-right" size={20} />
                        </span>{" "}
                        Back
                    </NavLink>
                    <h1 className={s.details__title}>{title ?? name}</h1>
                </div>
            </div>
        </div>
    );
}
export default MovieHeader;
