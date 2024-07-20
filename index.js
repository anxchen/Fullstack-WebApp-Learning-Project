const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ matcha: 'tiramisu' });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
//http://localhost:3000/