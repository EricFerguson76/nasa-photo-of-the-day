import React from 'react';
import styled from 'styled-components';

export const Text = styled.p`
  padding-top: 20px;
  color: white;
  
`

const NasaText = props => {
  return (
    <Text>
      {props.text}
    </Text>
  )
}

export default NasaText;