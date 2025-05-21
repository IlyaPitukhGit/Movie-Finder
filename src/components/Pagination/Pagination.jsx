import { useSearchParams } from "react-router-dom";
import s from "./pagination.module.css";
import Icon from "../icons/Icon";

const Pagination = ({ currentPage, totalPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        searchParams.set("page", newPage);
        setSearchParams(searchParams);
    };

    const renderPageButtons = () => {
        const buttons = [];
        const visiblePages = 5;
        let start = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
        let end = Math.min(start + visiblePages - 1, totalPages);

        // Корекція початку, якщо кінець досягає межі
        if (end - start < visiblePages - 1) {
            start = Math.max(end - visiblePages + 1, 1);
        }

        for (let i = start; i <= end; i++) {
            buttons.push(
                <button
                    key={i}
                    className={`${s.pageButton} ${
                        i === currentPage ? s.active : ""
                    }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className={s.pagination}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={s.navButton}
            >
                <Icon name="arrow-right" size={18} color="#ebeef5" />
            </button>

            {renderPageButtons()}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={s.navButton}
            >
                <Icon name="arrow-right" size={18} color="#ebeef5" />
            </button>
        </div>
    );
};

export default Pagination;
