import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaTitle from './NasaTitle';
import NasaDate from './NasaDate';
import NasaImg from './NasaImg';


function Nasa() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8xCFCxz63Z69ocezgbo6DW81cPZziY3VLPjuVuFP')
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
      .catch(error => {
        console.log('data not returned', error)
      });

  }, [])

  return (
    <div>
      <NasaTitle title={data.title} />
      <NasaDate date={data.date} />
      <NasaImg image={data.hdurl} />
    </div>
  );
}

export default Nasa;