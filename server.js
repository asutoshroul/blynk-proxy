const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Proxy endpoint
app.get('/api/blynk', async (req, res) => {
  try {
    const { pin } = req.query;
    const response = await axios.get(
      `https://blynk.cloud/external/api/get?token=3uAt31-2E_HzK2VSp0FKfo4noABBp5oR&${pin}`
    );
    res.json({ value: response.data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});