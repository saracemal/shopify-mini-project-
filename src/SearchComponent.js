import React, {useState} from 'react';
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults'
import styled from 'styled-components'

function SearchComponent() {
const [results, setResults] = useState([])
const [search, setSearch] = useState('')

    return (
        <SearchContainer>
                <InfoH3>welcome to The Shoppies</InfoH3>
                <InfoP>below, search and nominate up to 5 films to be nominated for our awards</InfoP>
            <SearchBar 
                search={search}
                setSearch={setSearch}
                />
            <SearchResults
                results={results}
                setResults={setResults} />
        </SearchContainer>
    )
};

export default SearchComponent;

const SearchContainer = styled.div`
`

const InfoH3 = styled.h3`
    text-align: center;
    font-family: 'Alex Brush', sans-serif;
`

const InfoP = styled.p`
text-align: center;
font-family: 'Montserrat Alternate', sans-serif;
`