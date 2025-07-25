import React, { useState } from "react";
import { useEffect } from "react";

function Filter({ search, onSearchChange }) {
    const [searchTerm, setSearchTerm] = useState(search);

    useEffect(() => {
        setSearchTerm(search);
    }, [search]);

    const handleChange = (event) => {
        const newSearch = event.target.value;
        setSearchTerm(newSearch);
        onSearchChange(newSearch);
    };

    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default Filter;