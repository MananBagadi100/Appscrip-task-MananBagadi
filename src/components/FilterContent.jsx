import '../styles/FilterContentStyles.css';

function FilterContent({ selectedCategory, onCategoryChange }) {
    return (
        <div className="filter-content">

            {/* CUSTOMIZABLE (dead UI) */}
            <div className="filter-section">
                <label className="filter-option">
                    <input type="checkbox" disabled />
                    CUSTOMIZABLE
                </label>
            </div>

            {/* IDEAL FOR (FUNCTIONAL) */}
            <div className="filter-section">
                <div className="filter-header">
                    <h4 className="filter-title">IDEAL FOR</h4>
                </div>

                <label className="filter-option">
                    <input
                        type="radio"
                        name="idealFor"
                        checked={selectedCategory === "men"}
                        onChange={() => onCategoryChange("men")}
                    />
                    Men
                </label>

                <label className="filter-option">
                    <input
                        type="radio"
                        name="idealFor"
                        checked={selectedCategory === "women"}
                        onChange={() => onCategoryChange("women")}
                    />
                    Women
                </label>

                <label className="filter-option">
                    <input
                        type="radio"
                        name="idealFor"
                        checked={selectedCategory === "kids"}
                        onChange={() => onCategoryChange("kids")}
                    />
                    Baby & Kids
                </label>
            </div>

            {/* DEAD UI FILTERS */}
            {[
                "OCCASION",
                "WORK",
                "FABRIC",
                "SEGMENT",
                "SUITABLE FOR",
                "RAW MATERIALS",
                "PATTERN"
            ].map(title => (
                <div className="filter-section" key={title}>
                    <div className="filter-header">
                        <h4 className="filter-title">{title}</h4>
                        <span className="chevron">⌄</span>
                    </div>
                    <p className="filter-subtext">All</p>
                </div>
            ))}
        </div>
    );
}

export default FilterContent;