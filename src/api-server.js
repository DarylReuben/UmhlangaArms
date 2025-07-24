import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(process.cwd(), 'src', 'home-section-text.json');

app.use(cors());
app.use(express.json());

function readHomeText() {
  if (!fs.existsSync(DATA_FILE)) {
    return 'Welcome to Umhlanga Arms! This is the home section.';
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')).text;
}

function writeHomeText(text) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({ text }), 'utf-8');
}

app.get('/api/home-text', (req, res) => {
  res.json({ text: readHomeText() });
});

app.post('/api/home-text', (req, res) => {
  const { text } = req.body;
  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Invalid text' });
  }
  writeHomeText(text);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
}); 