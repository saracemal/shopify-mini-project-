import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Title from './Title.js'
import SearchComponent from './SearchComponent.js'

function App() {
  const [movies, setMovies] = useState([])

  //const handleNomination = {
    //if no nominations yet, add
    // else [...nominations, newNominee]
  // }

  // useEffect(() => {
  //   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=cb2a3ecd')
  //   .then(response => response.json())
  //   .then(moviesArr => {
  //     setMovies(console.log(moviesArr))
  //   })
  // }, [])

  return (
    <AppBackground>
      <Title />
      <SearchComponent />
    </AppBackground>
  );
}

export default App;

const AppBackground = styled.div`
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); 
  height: 100vh;
  width: 100vw;
`
