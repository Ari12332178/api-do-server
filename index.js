const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const path = require('path')
var bodyParser = require('body-parser');
const fs = require('fs')

// default options
app.use(fileUpload());
app.use(bodyParser.json())

app.post('/upload', function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let nick = req.body.nick;cm
  let skin = req.files.skin;

  // Use the mv() method to place the file somewhere on your server
  skin.mv(__dirname + path.join(`/uploads/${nick}.png`), function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
    console.log(req.body)
  });
});

app.get('/skin', function(req, res) {
    let nick = req.body.nick;
    if(!nick) return res.status(403).send("Defina o nickname!")
    let skinImage = __dirname + path.join(`/uploads/${nick}.png`)
    fs.exists(skinImage, function(exists){
      if (exists) { 
        res.sendFile(skinImage);
      }else{
        return res.status(404).send("Skin não encontrada");
      }
    })
})

app.listen(8080)