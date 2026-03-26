const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dashboard.html')));
app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Dashboard running on port ${PORT}`));
