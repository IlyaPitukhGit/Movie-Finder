import { NavLink } from "react-router-dom";

import s from "./home.module.css";

function Home() {
    return (
        <section className={s.home}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Welcome To Movie Finder</h1>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Similique eaque aspernatur dolorem adipisci maxime
                        facere quae voluptatibus deserunt itaque nobis, neque
                        porro, culpa placeat ea distinctio ducimus. Doloribus,
                        consectetur recusandae.
                    </p>
                    <div className={s.button__container}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? s.active : s.link
                            }
                            to="/all"
                        >
                            All
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? s.active : s.link
                            }
                            to="/movies"
                        >
                            Movies
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? s.active : s.link
                            }
                            to="/TV-shows"
                        >
                            TV Shows
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
