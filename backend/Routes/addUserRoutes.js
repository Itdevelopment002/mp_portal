const express = require('express');
const router = express.Router();
const db = require('../config/db');
// const bcrypt = require('bcrypt');

// POST: Create new user
router.post('/add-user', async (req, res) => {
    const { name, mobile, user_permission, username, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO add_users (name, mobile, user_permission, username, password) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, mobile, user_permission, username, password], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: results.insertId, name, mobile, user_permission, username });
    });
});

// GET: Fetch all users
router.get('/add-user', (req, res) => {
    db.query('SELECT * FROM add_users', (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
});

// PUT: Update user by ID
router.put('/add-user/:id', async (req, res) => {
    const { id } = req.params;
    const { name, mobile, user_permission, username, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'UPDATE add_users SET name = ?, mobile = ?, user_permission = ?, username = ?, password = ? WHERE id = ?';
    db.query(query, [name, mobile, user_permission, username, password, id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ id, name, mobile, user_permission, username });
    });
});

// DELETE: Remove user by ID
router.delete('/add-user/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM add_users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
});

module.exports = router;
