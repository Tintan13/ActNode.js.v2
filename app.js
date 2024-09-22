const express = require('express');
const bodyParser = require('body-parser');
const ElyRoutes = require('./routes/ElyRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/items', ElyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
