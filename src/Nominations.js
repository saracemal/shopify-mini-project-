import React, {useEffect, useState} from 'react';
import NomCard from './NomCard.js'
import styled from 'styled-components'

function Nominations({movies, nominations, removeNomination}) {

function submitNominations() {
    localStorage.setItem("noms", JSON.stringify(nominations))
    localStorage.setItem("submission", "true")
    //here is where we will see some sort of animation
}

    return (
        <NominationContainer>
            <H1>Your Nominations</H1>
            <Card>
                {nominations.length === 0 ? "Nominate a movie to get started" : null }
                {nominations[0] ? <NomCard movie={nominations[0]} nominations={nominations} removeNomination={removeNomination} /> : null }
                {nominations[1] ? <NomCard movie={nominations[1]} nominations={nominations} removeNomination={removeNomination}/> :  null}
                {nominations[2] ? <NomCard movie={nominations[2]} nominations={nominations} removeNomination={removeNomination}/> : null }
                {nominations[3] ? <NomCard movie={nominations[3]} nominations={nominations} removeNomination={removeNomination}/> : null }
                {nominations[4] ? <NomCard movie={nominations[4]} nominations={nominations} removeNomination={removeNomination}/> : null }
            </Card>
            {localStorage.getItem("submission") === 'true' ? <h3>Your submission is in! 🍿</h3> :
            (<div className="submit"> {nominations.length === 5 ? <Button onClick={submitNominations}>SUBMIT 🍿</Button> : null }
            </div>)
        }
        </NominationContainer>
    )
};

export default Nominations;

const H3 = styled.h3`
    text-align: center;
    font-family: 'Righteous', sans-serif;
`

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

const Card = styled.div`
    font-family: 'Righteous', sans-serif;
    text-align: center;
    // display: flex;
   
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