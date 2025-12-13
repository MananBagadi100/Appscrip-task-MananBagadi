import './../styles/FilterContentStyles.css';

function FilterContent() {
    return (
        <div className="filter-content">
            {/* Example section */}
            <div className="filter-section">
                <h4 className="filter-title">IDEAL FOR</h4>

                <label className="filter-option">
                    <input type="checkbox" />
                    Men
                </label>

                <label className="filter-option">
                    <input type="checkbox" />
                    Women
                </label>

                <label className="filter-option">
                    <input type="checkbox" />
                    Baby & Kids
                </label>
            </div>

            <div className="filter-section">
                <h4 className="filter-title">OCCASION</h4>

                <label className="filter-option">
                    <input type="checkbox" />
                    Casual
                </label>

                <label className="filter-option">
                    <input type="checkbox" />
                    Formal
                </label>
            </div>
        </div>
    );
}

export default FilterContent;