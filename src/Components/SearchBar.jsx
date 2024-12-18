import React, { useState } from 'react'


const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(input);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                value={input}
                placeholder="Search images and photos"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchBar