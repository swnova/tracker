const express = require('express');
const path = require('path');
const PORT = 3001;
const app = express();
const projectData = require('./db/projects.json');

app.use(express.static('public'));






app.listen(PORT, () => console.log('APP running on ${PORT}'));