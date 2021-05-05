import React, {useEffect, useState} from 'react';
import './NavBar.js'
import './App.css';
import './Title.js'

function App() {
  const [movies, setMovies] = useState([])

  const handleNomination = {
    //if no nominations yet, add
    // else [...nominations, newNominee]
  }

  useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=cb2a3ecd')
    .then(response => response.json())
    .then(moviesArr => {
      setMovies(console.log(moviesArr))
    })
  }, [])

  return (
    <div className="App">
      <h1>hello world testing testing</h1>
    </div>
  );
}

export default App;
