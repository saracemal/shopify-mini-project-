import React, {useState} from 'react'
import styled from 'styled-components'

function SearchResults({movieResults, addNomination}) {

const isNominated = nominations.find((movieObj) => movieObj.omdbID === movie.omdb.ID)
    return (
        <Result>
            {movie.Title} ({movie.Year})

        </Result>
    )
};

export default SearchResults;

const Result = styled.h1`
font-family: 'Righteous', sans-serif;
`