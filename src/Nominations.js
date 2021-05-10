import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard.js'
import styled from 'styled-components'

function Nominations({movies, nominations}) {

function submitNominations() {
    localStorage.setItem("noms", JSON.stringify(nominations))
    localStorage.setItem("submission", "true")
    //here is where we will see some sort of animation
}

    return (
        <NominationContainer>
            <H1>Your Nominations</H1>
            <NomCard>
                { nominations.length === 0 ? "Nominate a movie to get started" : movies.map((movie) => 
                    <MovieCard 
                        key={movie.OMDBid}
                        movie={movie}

                        />)}
            </NomCard>
            {localStorage.getItem("submission") === 'true' ? <h3>Your submission is in! 🍿</h3> :
            (<div className="submit"> {nominations.length === 5 ? <Button onClick={submitNominations}>SUBMIT 🍿</Button> : null }
            </div>)
        }
        </NominationContainer>
    )
};

export default Nominations;

const Button = styled.button`
 backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: rgba(87.05882352941177%,26.66666666666666%,26.66666666666666%,0.357);
  border-radius: 11px;
  border: 3px solid #ffffff;
  border-width: 3px 3px 3px 3px;
  padding: 13px 16px 12px 16px;
    color: #ffffff;
  font-size: 16px;
  font-family: Courier New;
  font-weight: 300;
  font-style: normal

`

const NomCard = styled.div`
    font-family: 'Righteous', sans-serif;
    text-align: center;
    // display: flex;
    flex-direction: column;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    height: 300px;
    width: 600px;
`

const NominationContainer = styled.div`
    text-align: center;
    // display: flex;
    flex-direction: column;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    height: 500px;
    width: 800px;
`

const H1 = styled.h1`
    text-align: center;
    font-family: 'Alex Brush', sans-serif;
`