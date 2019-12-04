const express = require('express');
const router = express.Router();
const https = require('https');
const MongoClient = require('mongodb').MongoClient;

    let options = {
    "method": "GET",
    "hostname": "pokeapi.co",
    "port": null,
    "path": "/api/v2/pokemon/bulbasaur/",
    "headers": {}
}

MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
    if (err) throw err;

    const db = client.db('things');
    let lookup = options.path.split('/')[options.path.split('/').length-2];
    let fromCache = false;
    db.collection('pokemon').findOne({name:lookup}, function(err, resp) {
        if (err) throw err;
        //console.log(resp)
        if(resp != null)
        {
            fromCache = true;
            router.get('/', function(req, res, next) {
                res.json([resp, resp, resp])
                // res.render('ps6', {name: `${resp.name}`,
                //     weight: `${resp.weight}`,
                //     height: `${resp.height}`,
                //     fromCache: `${fromCache}`});
            });
        }
        else
        {
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
                    //console.log(JSON.parse(data));
                    let d = JSON.parse(data);
                    let obj = {'name':d.forms[0].name, 'weight':d.weight, 'height':d.height}
                    MongoClient.connect('mongodb://localhost:27017/', function (err, client) {
                        if (err) throw err;

                        const db = client.db('things');
                        db.collection('pokemon').insertOne(obj, function(err, res) {
                            if (err) throw err;
                            console.log('Object cached successfully');
                        })
                    });
                    router.get('/', function(req, res, next) {
                        res.json([obj, obj, obj]);
                        // res.render('ps6', {name: `${obj.name}`,
                        //     weight: `${obj.weight}`,
                        //     height: `${obj.height}`,
                        //     fromCache: `${fromCache}`});
                    });

                });
            });

            req.end();

        }
    })
});

/* GET home page. */
/*
router.get('/', function(req, res, next) {
    res.render('ps6', {name: `${d.forms[0].name}`,
                       weight: `${d.weight}`,
                       height: `${d.height}`});
});
*/

module.exports = router;
