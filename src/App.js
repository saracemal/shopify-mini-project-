import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './Title.js'

function App() {
  const [movies, setMovies] = useState([])

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
