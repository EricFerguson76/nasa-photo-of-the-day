import React from 'react';
import styled from 'styled-components';
import nasalogo from '../img/nasalogo.png'


export const Header = styled.div`
display:flex;
justify-content: center;
align-items: center;
background: black;
width: 100%;
height: 15vh;
font-size: 2rem;
color: white;
`;




const NasaTitle = props => {
  return (
    <Header>
      <img src={nasalogo} alt='Nasa Logo' width='100' />
      <h1>{props.title}</h1>
    </Header>
  )
}

export default NasaTitle;