import React, { useState } from 'react';


function Search({ onFilter }) {
    const [query, setQuery] = useState('');
    function handleSubmit(event) {

        event.preventDefault();
        onFilter(query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search:
                <input type="text" placeholder='search recent transaction' value={query} onChange={event => setQuery(event.target.value)} />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;