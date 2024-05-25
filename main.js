const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;

app.use(express.json());

// Define middleware to set CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Define route to fetch news data
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://api.webz.io/newsApiLite', {
            params: {
                token: 'ead36e49-8867-4e36-adb7-89177d247978',
                q: 'Bitcoin',
                category: 'economy, business and finance'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Could not fetch news' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
