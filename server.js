const path = require('path');
const express = require('express');


const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
