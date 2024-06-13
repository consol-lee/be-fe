// server.js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/api/v1/user-profile', (req, res) => {
  res.json({ message: 'User profile data' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});