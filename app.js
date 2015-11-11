var http = require('http');
var express = require('express');
var ig = require('instagram-node').instagram();
var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));

ig.use({
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_SECRET_CLIENT_ID'
});

app.get('/', function(req, res){
    res.render('index', { title: 'Instagram', medias: null});
});

app.get('/:tag', function(req, res){
    var tag = req.params.tag;
    ig.tag_media_recent(tag, function(err, medias, pagination, remaining, limit) {
        res.render('index', { title: 'Instagram', medias: medias});
    });
});

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
