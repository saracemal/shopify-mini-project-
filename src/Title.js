import React from 'react';
import styled from 'styled-components'
import './App.css';

function Title() {
    return (
        <Container>
            <H1>The Shoppies 🏆 </H1>
        </Container>
    )
};

export default Title;

const H1 = styled.h1`
    font-size: 85px;
    text-align: center;
    font-family: 'Righteous', sans-serif;
`

const Container = styled.div`
`

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;
