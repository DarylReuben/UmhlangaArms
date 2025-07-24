const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'home-section-text.json');

exports.handler = async function(event) {
  if (event.httpMethod === 'GET') {
    let text = 'Welcome to Umhlanga Arms! This is the home section.';
    if (fs.existsSync(DATA_FILE)) {
      text = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')).text;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ text })
    };
  }

  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body || '{}');
    if (typeof text !== 'string' || !text.trim()) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid text' })
      };
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify({ text }), 'utf-8');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed'
  };
}; 