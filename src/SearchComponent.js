import React, {useState} from 'react';
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults'

function SearchComponent() {
const [results, setResults] = useState([])

    return (
        <div>
            <SearchBar />
            <SearchResults />
        </div>
    )
};

export default SearchComponent;