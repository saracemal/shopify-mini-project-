import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

function Nominations() {
const [nominees, setNominees] = useState([])

    return (
        <NominationContainer>
            <H1>Your Nominations</H1>
        </NominationContainer>
    )
};

export default Nominations;

const NominationContainer = styled.container`
`

const H1 = styled.h1`
`