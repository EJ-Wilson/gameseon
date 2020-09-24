const path = require('path')
const express = require('express')
const database = require("./src/Lib/MongoDB.js");


const app = express(),
            DIST_DIR = path.join(__dirname, 'dist'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})

app.post("/projects", function(request, response) {
    

    database.saveProject(request.data);

    return response.json({}, 200);
});