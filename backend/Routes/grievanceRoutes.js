
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Import the db connection

router.post('/grievances', (req, res) => {
    const {
        inwardNo,
        subject,
        fullName,
        mobileNo,
        boothNo,
        handledBy,
        complaintSentTo,
        date,
        applicationStatus,
        district,
        taluka,
        village,
        city,
        pincode,
        whatsappGroup,
        remark
    } = req.body;

    const sql = `INSERT INTO grievances (inwardNo, subject, fullName, mobileNo, boothNo, handledBy, complaintSentTo, date, applicationStatus, district, taluka, village, city, pincode, whatsappGroup, remark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [inwardNo, subject, fullName, mobileNo, boothNo, handledBy, complaintSentTo, date, applicationStatus, district, taluka, village, city, pincode, whatsappGroup, remark], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
});


router.get('/grievances', (req, res) => {
    db.query('SELECT * FROM grievances', (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
});


router.get('/grievances/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM grievances WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) {
            return res.status(404).json({ message: 'Grievance not found' });
        }
        res.status(200).json(result[0]); // Send only the first matching record
    });
});


router.put('/grievances/:id', (req, res) => {
    const { id } = req.params;
    const {
        subject,
        fullName,
        mobileNo,
        boothNo,
        handledBy,
        complaintSentTo,
        date,
        applicationStatus,
        district,
        taluka,
        village,
        city,
        pincode,
        whatsappGroup,
        remark
    } = req.body;
    const query = `
        UPDATE grievances
        SET subject = ?, fullName = ?, mobileNo = ?, boothNo = ?, handledBy = ?, complaintSentTo = ?, date = ?, applicationStatus = ?, district = ?, taluka = ?, village = ?, city = ?, pincode = ?, whatsappGroup = ?, remark = ?
        WHERE id = ?
    `;
    db.query(query, [subject, fullName, mobileNo, boothNo, handledBy, complaintSentTo, date, applicationStatus, district, taluka, village, city, pincode, whatsappGroup, remark, id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({
            message: 'Grievance updated successfully',
            id
        });
    });
});


router.delete('/grievances/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM grievances WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
});



module.exports = router;
