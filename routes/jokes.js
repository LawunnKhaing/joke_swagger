const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();
const db = new sqlite3.Database('./db/jokes.db');

router.get('/jokes/random', (req, res) => {
  db.get('SELECT * FROM jokes ORDER BY RANDOM() LIMIT 1', [], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

router.post('/jokes', (req, res) => {
  const content = req.body.content;
  db.run('INSERT INTO jokes(content) VALUES(?)', [content], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, content });
  });
});

router.get('/categories', (req, res) => {
  db.all('SELECT * FROM categories', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
