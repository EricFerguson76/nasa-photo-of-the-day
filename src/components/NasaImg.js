import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  padding-top: 40px;
`


const NasaImg = props => {
  return (
    <>
      <Image src={props.image} alt='Nasa APOD' width='400' />
    </>
  )
}

export default NasaImg;