import React, {useState} from 'react';
import styled from 'styled-components'

function SearchBar({searched, setSearched}) {

    return (
        <div className='search-bar'>
         <SearchInput
            type="text"
            placeholder=""
            value={searched}
         
         />
        
        </div>
    )
};

export default SearchBar;

const SearchInput = styled.input`
`
