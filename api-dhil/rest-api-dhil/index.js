const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Helo rest api');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});