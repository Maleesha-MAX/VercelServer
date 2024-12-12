const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Your backend routes go here
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Received location: Latitude ${latitude}, Longitude ${longitude}`);
  res.json({ message: 'Location received' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
