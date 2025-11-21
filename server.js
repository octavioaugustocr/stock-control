const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

const productRoutes = require('./src/routes/productRoutes');
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`go to: http://localhost:${PORT}`);
});