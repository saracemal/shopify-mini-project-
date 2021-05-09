import React, {useState} from 'react';
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults'
import styled from 'styled-components'

function SearchComponent() {
const [results, setResults] = useState([])
const [search, setSearch] = useState('')

    return (
        <SearchContainer>
                <InfoH1>Welcome to The Shoppies</InfoH1>
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
// position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    flex-direction: column;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    height: 500px;
    width: 800px;
`

const InfoH1 = styled.h1`
    text-align: center;
    font-family: 'Alex Brush', sans-serif;
`

const InfoP = styled.p`
text-align: center;
font-family: 'Montserrat Alternate', sans-serif;
`