import React from 'react';
import styled from 'styled-components'
import './App.css';

function Title() {
    return (
        <Container>
            <H1>The Shoppies  </H1>
        </Container>
    )
};

export default Title;

const H1 = styled.h1`
    text-align: center;
    font-family: 'Righteous', sans-serif;
`

const Container = styled.div`
`
