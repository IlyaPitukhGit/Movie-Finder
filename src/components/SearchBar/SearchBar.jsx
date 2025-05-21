import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import s from "./searchBar.module.css";
import Icon from "../icons/Icon";

function Searchbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.search.value.trim();
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value) {
                newParams.set("query", value);
                newParams.set("page", "1");
            } else newParams.delete("query");
            return newParams;
        });
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <button type="submit" className={s.button}>
                <Icon
                    name="search-normal"
                    size={24}
                    color={isFocused ? "#7b6ef6" : "#8E95A9"}
                />
            </button>
            <input
                name="search"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Search Movies or TV Shows"
                type="text"
                defaultValue={query}
                className={s.input}
            />
        </form>
    );
}

export default Searchbar;
