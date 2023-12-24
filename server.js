/*const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
//app.use(express.static('public'));

app.get('/cat-facts', async (req, res) => {
  try {
    const response = await axios.get('https://cat-fact.herokuapp.com/facts/');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and 
//it supports the Promise API that is native to JS ES6. 
//It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
*/

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/cat-facts', async (req, res) => {
  try {
    const url = 'https://cat-fact.herokuapp.com/facts/';
    const response = await fetch(url, {
      headers: { "User-Agent": "My Cats" },
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});