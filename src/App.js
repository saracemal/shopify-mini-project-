import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';
import Title from './Title.js'
import SearchComponent from './SearchComponent.js'
import Nominations from "./Nominations.js"

function App() {
  const [nominations, setNominations] = useState([])

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

  useEffect(() => {
    if (localStorage.getItem("noms")){
      const localNoms = JSON.parse(localStorage.getItem("noms"))
      setNominations(localNoms)
    }
  }, [])

  function deleteNomination(movieObj) {
    const updatedNoms = nominations.filter((nominee) => 
      nominee.imdbID !== movieObj.imdbID)
    setNominations(updatedNoms)
    localStorage.setItem("noms", JSON.stringify(updatedNoms))
  }

  function addNomination(newNom) {
    setNominations([newNom, ...nominations])
    localStorage.setItem("noms", JSON.stringify([newNom, ...nominations]))
  }

  return (
    <AppContainer>
      <Title />
      <SearchComponent 
        nominations={nominations}
        addNomination={addNomination}
        deleteNomination={deleteNomination}/>
      <Nominations 
        nominations={nominations}
        setNominations={setNominations} 
        deleteNomination={deleteNomination}/>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); 
  // height: 100vh;
  // width: 100vw;
  text-align: center;
  // display: flex;
  // flex-direction: column;
`
