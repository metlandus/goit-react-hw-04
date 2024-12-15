import React from 'react';



const SearchBar = ({ notify }) => {

    return (
        <form>
            <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            <button type="submit" onClick={(e) => { e.preventDefault(); notify(); }}>Search</button>
        </form>
    )
}

export default SearchBar