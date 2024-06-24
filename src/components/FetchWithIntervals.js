import React, { useState, useEffect } from 'react';

const FetchWithIntervals = () => {
  const [currentNumber, setCurrentNumber] = useState(null);

  const FETCH_DATA_URL = "http://localhost:9000/api/work-activities/getCumulateTest";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FETCH_DATA_URL);
        const data = await response.json();
        setCurrentNumber(data.currentNum);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 3 seconds
    const intervalId = setInterval(fetchData, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {currentNumber !== null ? (
        <p>Current Number: {currentNumber}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchWithIntervals;