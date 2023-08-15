// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulePage from './components/SchedulePage';
import TrainDetailsPage from './components/TrainDetailsPage';
import { useState, useEffect } from 'react';

function App() {
  const [ records, setRecords ] = useState([])

  useEffect(()=>{
    fetch('http://20.244.56.144/train/register')
    .then(response=> response.json())
    .then(data => setRecords(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={SchedulePage} />
        <Route path="/train/:trainId" component={TrainDetailsPage} />
      </Routes>
    </Router>
  );
}

export default App;
