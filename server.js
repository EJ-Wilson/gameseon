const path = require('path')
const express = require('express')
const database = require("./src/ServerLib/MongoDB.js");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
var fs = require('fs');
var mime = require('mime-types');



//Webpack building included in server
const neutrino = require('neutrino');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware'); //webpack dev middleware
const history = require('connect-history-api-fallback'); //Workaround for react router
//Load .neutrinorc.js
var webPackOptions = neutrino().webpack()

//Set the production mode
webPackOptions.mode = 'production'
var isDev = false

//Check for dev flag
process.argv.forEach(arg => {
    if(arg === "--dev"){
        //Set dev
        webPackOptions.mode = 'development'
        isDev = true
    }
});
//load the options
const compiler = webpack(webPackOptions);



//Initialise app and middleware
const app = express(),
            DIST_DIR = path.join(__dirname, 'dist'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(history({verbose: true}));
app.use(middleware(compiler, {
    publicPath: '/'
}));

//Express Core
app.use(express.static(DIST_DIR))
app.use(express.urlencoded({
    extended: true
}))


// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));




//Run Server
const host = '0.0.0.0';
const port = process.env.PORT || 5000
app.listen(port, host, () => {
    console.log(`App listening to ${process.env.PORT || 5000}....`)
    console.log('Press Ctrl+C to quit.')
})

app.get('/projects.data', function (req, res) {
    database.findProjects({}, (projects) => {
        res.send(projects)
    })
})

app.get('/uploads/*', (req, res) => {
    console.log(path.join(__dirname, decodeURI(req.path)))
    res.sendFile(path.join(__dirname, decodeURI(req.path)))
})

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.post("/submitproject", function(request, response) {

    console.log(request.body)
    database.submitProject(request.body);

    return response.json({}, 200);
});

app.post("/saveproject", function(request, response) {

    database.saveProject(request.body);

    return response.json({}, 200);
});

let imgpath = "";
app.post('/uploadimage', async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            //Use the name of the input field (i.e. "image") to retrieve the uploaded file
            let image = req.files.file;
            let imgData = req.body
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            let fileExtension = mime.extension(image.mimetype)
            imgpath = './uploads/' + imgData.username + "/" + imgData.project + "/" + imgData.imgSlot + "." + fileExtension
            image.mv(imgpath);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: image.name,
                    mimetype: image.mimetype,
                    size: image.size,
                    path: imgpath
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/uploadimage', async (req, res) => {

    try {
        //Use the unlink() method to place the file in delete the file
        fs.unlink(imgpath, function (err) {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');

            //send response
            res.send({
                status: true,
                message: 'File is deleted',
            });
        }); 

    } catch (err) {
        res.status(500).send(err);
    }
});

