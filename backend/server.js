const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Import Routes
const navMenuRoutes = require('./Routes/navMenuRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const formRoutes = require('./Routes/formRoutes');
const masterRoutes = require('./Routes/masterRoutes');
const grievanceRoutes = require('./Routes/grievanceRoutes')
const addUserRoutes = require('./Routes/addUserRoutes')
const fileUploadRoutes = require('./Routes/fileuploadRoutes')



// Use routes
app.use('/api/navmenu', navMenuRoutes);
app.use('/api/login', loginRoutes);
app.use('/api', formRoutes);
app.use('/api', masterRoutes);
app.use('/api', grievanceRoutes);
app.use('/api', addUserRoutes);
app.use('/api', fileUploadRoutes);




// Server listening on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
