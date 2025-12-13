import { useState } from 'react';
import '../styles/FilterContentStyles.css';
import ChevronDown from './../assets/icons/chevronDown.svg'
function FilterContent({ selectedCategory, onCategoryChange }) {
    const [idealForOpen, setIdealForOpen] = useState(true); // default open state for working filters
    return (
        <div className="filter-content">

            {/* CUSTOMIZABLE (dead UI) */}
            <div className="filter-section">
                <label className="filter-option">
                    <input type="checkbox" disabled />
                    CUSTOMIZABLE
                </label>
            </div>
            <br className='filter-content-seperator'/>
            {/* IDEAL FOR (FUNCTIONAL) */}
            <div className="filter-section">
                <div
                    className="filter-header"
                    onClick={() => setIdealForOpen(prev => !prev)}
                >
                    <h4 className="filter-title">IDEAL FOR</h4>
                    <img
                        src={ChevronDown}
                        alt="Toggle"
                        className={`chevron ${idealForOpen ? 'open' : ''}`}
                    />
                </div>

                {idealForOpen && (
                    <>
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
                    </>
                    )}
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
                        <img src={ChevronDown} alt='Chevron Down'/>
                    </div>
                    <p className="filter-subtext">All</p>
                </div>
            ))}
        </div>
    );
}

export default FilterContent;