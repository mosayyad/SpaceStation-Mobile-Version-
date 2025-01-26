const express = require('express');
const path = require('path');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('fd03d7054fcc47a9ad666d64b650384e'); // Replace with your API key

const app = express();
const port = 3090;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Endpoint to fetch space-related news
app.get('/news', async (req, res) => {
  try {
    const response = await newsapi.v2.everything({
      q: 'space', // Query for space-related news
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: 10, // Limit to 10 articles
    });
    res.json(response.articles);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});