import React, {useState} from 'react';
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults'

function SearchComponent() {
const [results, setResults] = useState([])
const [search, setSearch] = useState('')

    return (
        <div>
            <SearchBar 
                search={search}
                setSearch={setSearch}
                />
            <SearchResults
                results={results}
                setResults={setResults} />
        </div>
    )
};

export default SearchComponent;