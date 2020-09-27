const path = require('path')
const express = require('express')
const database = require("./src/Lib/MongoDB.js");


const app = express(),
            DIST_DIR = path.join(__dirname, 'dist'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.use(express.urlencoded({
    extended: true
}))

const host = '0.0.0.0';
const port = process.env.PORT || 5000
app.listen(port, host, () => {
    console.log(`App listening to ${process.env.PORT || 5000}....`)
    console.log('Press Ctrl+C to quit.')
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.post("/submitproject", function(request, response) {
    
    console.log(request)

    // database.saveProject(request.data);

    return response.json({}, 200);
});