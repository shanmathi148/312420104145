// src/components/TrainDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TrainDetailsPage() {
  const { trainId } = useParams();
  const [trainDetails, setTrainDetails] = useState({});

  useEffect(() => {
    axios.get(`/numbers?url=http://20.244.56.144:80/train/trains&url=http://20.244.56.144/train/trains/2344`) 
      .then(response => {
        // Assuming the API response is an array of objects with train details
        const train = response.data.numbers.find(train => train.id === parseInt(trainId));
        if (train) {
          setTrainDetails(train);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [trainId]);

  return (
    <div>
      <h1>Train Details</h1>
      <p>Train ID: {trainDetails.id}</p>
      <p>Train Name: {trainDetails.name}</p>
      {/* Display other train details */}
    </div>
  );
}

export default TrainDetailsPage;
