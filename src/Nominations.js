import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

function Nominations() {
const [nominees, setNominees] = useState([])

//if no nominees, say soemthing like "nominate someone to get started!" if else statement
// 
// if (nominees.length === 0) {
//     return "Nominate someone to get started!"
// }

//add semi cursive font to nominations
    return (
        <NominationContainer>
            <H1>Your Nominations</H1>
        </NominationContainer>
    )
};

export default Nominations;

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