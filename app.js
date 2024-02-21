const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(process.cwd(), '/public')));
const PORT = 8501;

// here we serve the file "index.html" 
app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    let indexFile = fs.readFileSync(path.join(process.cwd(), 'index.html'));
    res.write(indexFile, (err) => {
        if (err) throw err;
    });
    res.end();
});

app.get("*", (req, res) => {
    res.setHeader('Content-type', 'text/html');
    let file404 = fs.readFileSync(path.join(process.cwd(), 'notfound.html'));
    res.write(file404, (err) => {
        if (err) throw err;
    });
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is running at: http://127.0.0.1:${PORT}`);
});

module.exports = app;