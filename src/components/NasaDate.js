import React from 'react';
import styled from 'styled-components';


export const Date = styled.h2`
padding-top: 20px;
  color: white;
`;


const NasaDate = props => {
  return (
    <Date>
      {props.date}
    </Date>
  )
}

export default NasaDate;