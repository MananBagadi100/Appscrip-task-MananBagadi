import { useState } from 'react';
import '../styles/FilterContentStyles.css';
import ChevronDown from './../assets/icons/chevronDown.svg'
function FilterContent({ selectedCategories, onCategoryChange }) {
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
            <hr  className='filter-seperator-line'/>

            {/* Functional Filters */}
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
                        {/* Unselect all — show only when something is selected */}
                        {selectedCategories.length > 0 && (
                            <span
                                className="filter-unselect"
                                onClick={() => onCategoryChange([])}
                            >
                                Unselect all
                            </span>
                        )}

                        {['men', 'women', 'kids'].map(option => (
                            <label className="filter-option" key={option}>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(option)}
                                    onChange={() => {
                                        if (selectedCategories.includes(option)) {
                                            onCategoryChange(
                                                selectedCategories.filter(c => c !== option)
                                            );
                                        } else {
                                            onCategoryChange([...selectedCategories, option]);
                                        }
                                    }}
                                />
                                {option === 'men'
                                    ? 'Men'
                                    : option === 'women'
                                    ? 'Women'
                                    : 'Baby & Kids'}
                            </label>
                        ))}
                    </>
                )}
            </div>
            <hr  className='filter-seperator-line'/>
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
                    <hr  className='filter-seperator-line'/>
                </div>
            ))}
        </div>
    );
}

export default FilterContent;