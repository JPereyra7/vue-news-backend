const axios = require('axios');

exports.handler = async (event, context) => {
    try {
        const response = await axios.get('https://api.webz.io/newsApiLite', {
            params: {
                token: 'ead36e49-8867-4e36-adb7-89177d247978',
                q: 'Bitcoin',
                category: 'economy, business and finance'
            }
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error('Error fetching news:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not fetch news' })
        };
    }
};