const express = require('express');
const router = express.Router();
const https = require('https');


let options = {
    "method": "GET",
    "hostname": "pokeapi.co",
    "port": null,
    "path": "/api/v2/pokemon/bulbasaur/",
    "headers": {}
}

let rend;
let d;

let req = https.get(options,(res) => {
    //let chunks = [];
    let data = ''

    res.on("data", (chunk) => {
        //chunks.push(chunk);
        data += chunk
    });

    res.on("end", () => {
        //let body = Buffer.concat(chunks);
        //console.log(JSON.parse(body.toString()));
        d = JSON.parse(data);
        console.log(JSON.parse(data));

    });
});

req.end();

// Not sure which APIs I'll use, this was one of the only APIs I could find which didn't require signing up
// Also not sure if I should put the above code into the .get below (or if I even can)

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('api', {name: `${d.forms[0].name}`,
                       weight: `${d.weight}`,
                       height: `${d.height}`});
});

module.exports = router;
