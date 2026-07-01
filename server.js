const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  const now = new Date();
  res.json({
    status: 'alive',
    message: 'Your luminous experience is ready.',
    timestamp: now.toISOString(),
    welcome: `Hello from the backend! It is ${now.toLocaleTimeString()}`
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
