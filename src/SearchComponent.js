import React, {useEffect, useState} from 'react';
import Nominations from './Nominations.js'
import styled from 'styled-components'


function SearchComponent({nominations, addNomination, deleteNomination}) {
const [movieResults, setMovieResults] = useState([])
const [searched, setSearched] = useState('')


useEffect(() => {
    let isMounted = true;

    fetch(`https://www.omdbapi.com/?s=${searched}&type=movie&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
    .then((r) => r.json())
    .then((movieData) => {
        if (isMounted) handleMovies(movieData.Search) 
    })
    return () => 
        {isMounted = false};
}, [searched])

console.log(process.env.REACT_APP_OMDB_API_KEY)

function handleMovies(movieData) {
    setMovieResults(movieData)
}

// const searchedMovies = movieResults.filter((movie) => {
//     return movie.title.toLowerCase().includes(searched.toLowerCase())
// })

    return (
        <SearchContainer>
                <InfoH1>Welcome to The Shoppies</InfoH1>
                <InfoH3>Below, search and nominate up to 5 films to be nominated for our awards.</InfoH3>
           
            <SearchInput
                type="text"
                placeholder="🎬 search for movies"
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
            />
                {movieResults ? <SearchResults  
                    addNomination={addNomination}
                    movieResults={movieResults}
                    nominations={nominations}
                    />
                    : null}
        </SearchContainer>
    )
};

export default SearchComponent;

//change text size below for search results
const SearchResults = styled.div`
    text-align: center;
    font-family: 'Righteous', sans-serif;
`

const SearchInput = styled.input`
    width: 250px;
    height: 30px;
    border-bottom: 2px dotted black;
    // text-family: 'Montserrat Alternates' sans-serif;
    text-align: center;
    position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
`

const SearchContainer = styled.div`

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

const InfoH3 = styled.h3`
    text-align: center;
    font-family: 'Righteous', sans-serif;
`