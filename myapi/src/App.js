import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {data && (
        <ul>
          {data.map(user => (
            <li>
              <div>ID: {user.id}</div>
              <div>Name: {user.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
