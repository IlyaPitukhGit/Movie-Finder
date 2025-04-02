import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import s from "./Layout.module.css";

function Layout() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
