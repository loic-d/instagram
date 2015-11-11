var http = require('http');
var express = require('express');
var ig = require('instagram-node').instagram();
var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));

ig.use({
    client_id: '05ee4dc91aa14110a2c52e33e19ebf06',
    client_secret: '47118dcf35d740f3a675cfd7a13d0c11'
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
