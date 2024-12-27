import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the Spring Boot backend (adjust API endpoint as needed)
    axios.get('http://localhost:8081/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Data from API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>  {/* Adjust based on actual response data */}
        ))}
      </ul>
    </div>
  );
}

export default App;
