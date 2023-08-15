// src/components/SchedulePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SchedulePage() {
  const [trains, setTrains] = useState([]);

  {/*useEffect(() => {
    axios.get('/numbers?url=&url=http://20.244.56.144/train/auth/') 
      .then(response => {
        setTrains(response.data.numbers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);*/}

  return (
    <div>
      <h1>Train Schedule</h1>
      <ul>
        {trains.map(trainId => (
          <li key={trainId}>
            <Link to={`/train/${trainId}`}>Train {trainId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SchedulePage;
