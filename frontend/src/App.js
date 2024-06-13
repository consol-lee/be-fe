// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://ingress-ngi-ingress-ngin-b1233-24922784-48cecdbe5dff.kr.lb.naverncp.com/api/v1/user-profile')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User Profile</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
