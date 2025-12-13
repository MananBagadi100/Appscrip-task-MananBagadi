import { useState } from 'react';
import ChevronDown from '../assets/icons/chevronDown.svg';
import './../styles/SortDropdownStyle.css';

function SortDropdown({ sortBy, onChange }) {
    const [open, setOpen] = useState(false);

    const sortOptions = [
        { label: 'Recommended', value: 'recommended' },
        { label: 'Newest First', value: 'newest' },
        { label: 'Popular', value: 'popular' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Price: Low to High', value: 'price-asc' }
    ];

    const activeLabel =
        sortOptions.find(option => option.value === sortBy)?.label;

    return (
        <div className="sort-dropdown-wrapper">
            <button
                className="sort-dropdown-button"
                onClick={() => setOpen(prev => !prev)}
            >
                {activeLabel}
                <img
                    src={ChevronDown}
                    alt="Toggle sort"
                    className={`sort-arrow ${open ? 'open' : ''}`}
                />
            </button>

            {open && (
                <div className="sort-dropdown-menu">
                    {sortOptions.map(option => (
                        <div
                            key={option.value}
                            className={`sort-dropdown-item ${
                                sortBy === option.value ? 'active' : ''
                            }`}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                        >
                            {sortBy === option.value && '✓ '}
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SortDropdown;