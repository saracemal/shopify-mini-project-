import React, {useState} from 'react';
import styled from 'styled-components'

function SearchBar({searched, setSearched}) {

    return (
        <div className='search-bar'>
         <SearchInput
            type="text"
            placeholder=""
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
         />
        
        </div>
    )
};

export default SearchBar;

const SearchInput = styled.input`
    border-bottom: 2px dotted black;
    text-family: 'Montserrat Alternates' sans-serif;
`
