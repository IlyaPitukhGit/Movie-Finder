import { Link, NavLink } from "react-router-dom";
import Icon from "../icons/Icon";

import s from "./header.module.css";

function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/">
                    <Icon name="app-icon" size={40} />
                </Link>
                <nav className={s.nav}>
                    <ul className={s.nav__list}>
                        <li className={s.nav__item}>
                            <NavLink to="/" className={s.nav__link}>
                                Home
                            </NavLink>
                        </li>
                        <li className={s.nav__item}>
                            <NavLink to="/movies" className={s.nav__link}>
                                Movies
                            </NavLink>
                        </li>
                        <li className={s.nav__item}>
                            <NavLink to="/tv" className={s.nav__link}>
                                TV Shows
                            </NavLink>
                        </li>
                        <li className={s.nav__item}>
                            <NavLink className={s.nav__link}>
                                Suggest me
                            </NavLink>
                            <Icon name="arrow-right" size={16} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;
