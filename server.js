const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

const productRoutes = require('./src/routes/productRoutes');
const path = require("node:path");
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`go to: http://localhost:${PORT}`);
});