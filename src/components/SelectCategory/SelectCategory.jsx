import { useSearchParams } from "react-router-dom";
import s from "./selectCategory.module.css";

const categories = [
    { label: "All", value: "all" },
    { label: "Movies", value: "popular-movies" },
    { label: "TV Shows", value: "popular-tv-shows" },
];

function SelectCategory() {
    const makeButtonClassName = (activeCategory, value) => {
        const optionClasses = [s.link];
        if (activeCategory === value) {
            optionClasses.push(s.active);
        }
        return optionClasses.join(" ");
    };

    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get("category") ?? "all";
    return (
        <div className={s.button__container}>
            {categories.map(({ label, value }) => {
                return (
                    <button
                        key={value}
                        className={makeButtonClassName(activeCategory, value)}
                        onClick={() => setSearchParams({ category: value })}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}

export default SelectCategory;
