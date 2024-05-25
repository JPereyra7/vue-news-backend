// functions/getNews.js

const axios = require('axios');

exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': 'https://vue-news-joel.netlify.app',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    };

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
            headers: headers,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error('Error fetching news:', error);
        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ error: 'Could not fetch news' })
        };
    }
};