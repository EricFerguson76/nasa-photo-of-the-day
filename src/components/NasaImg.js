import React from 'react';


const NasaImg = props => {
  return (
    <>
      <img src={props.image} alt='Nasa APOD' width='500' />
    </>
  )
}

export default NasaImg;