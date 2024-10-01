const express = require('express');
const router = express.Router();
const db = require('../config/db.js');


// POST API to add a new entry
router.post('/add-entry', (req, res) => {
    const { inwardNo, entryDate, subject, description } = req.body;

    const query = 'INSERT INTO entries (inward_no, entry_date, subject, description) VALUES (?, ?, ?, ?)';
    db.query(query, [inwardNo, entryDate, subject, description], (err, result) => {
        if (err) {
            console.error('Database insert error:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(201).json({ message: 'Entry added successfully', id: result.insertId });
    });
});

// GET API to fetch all entries
router.get('/entries', (req, res) => {
    const query = 'SELECT * FROM entries ORDER BY id DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database fetch error:', err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.json(results);
    });
});


module.exports = router;
