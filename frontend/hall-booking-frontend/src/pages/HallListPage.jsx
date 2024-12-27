import React, { useEffect, useState } from "react"; // Import React here
import axios from "axios";

const HallListPage = () => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/halls");
        setHalls(response.data);
      } catch (error) {
        console.error("Error fetching halls:", error);
      }
    };

    fetchHalls();
  }, []);

  return (
    <div>
      <h1>Available Halls</h1>
      <ul>
        {halls.map((hall) => (
          <li key={hall.id}>{hall.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HallListPage;
