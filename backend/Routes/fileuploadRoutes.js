const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const db = require('../config/db.js');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// API to upload image
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const fileName = req.file.filename;
    const filePath = `/uploads/${fileName}`;
    const sql = 'INSERT INTO uploaded_images (filename, file_path) VALUES (?, ?)';
    db.query(sql, [fileName, filePath], (err, result) => {
        if (err) throw err;
        res.status(201).json({
            message: 'Image uploaded  successfully',
            imageUrl: filePath,
        });
    });
});

// API to get all images with custom ID format
router.get('/images', (req, res) => {
    const sql = 'SELECT * FROM uploaded_images ORDER BY uploaded_at DESC'; // Order by the latest uploads
    db.query(sql, (err, results) => {
        if (err) throw err;

        // Map each result to include the custom formatted ID with indexing
        const formattedResults = results.map((row, index) => {
            // Extract the date from the uploaded_at field
            const date = new Date(row.uploaded_at);
            const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure two digits
            const year = date.getFullYear().toString().slice(-2); // Last two digits of the year

            // Format ID as IN/000<Index>/<Day>-<Month>-<Year>
            const formattedId = `IN/${String(index + 1).padStart(4, '0')}/${day}-${month}-${year}`;

            // Return the row data along with the formatted ID
            return {
                id: row.id, // Original database ID
                filename: row.filename,
                file_path: row.file_path,
                uploaded_at: row.uploaded_at,
                formattedId: formattedId, // Use the index for formattedId
            };
        });

        // Send formatted results
        res.status(200).json(formattedResults);
    });
});

module.exports = router;
