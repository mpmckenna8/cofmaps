var pg = require('pg');
var http = require('http');
var postQ = require('./lib/postLine.js');
var styleu = require('./lib/poststy.js');
var fs = require('fs');
var drpdown = require('./lib/dropper.js')

var conString = "postgres://matthewmckenna:@localhost/cof";

//load up that stylesheet
var stylesh = fs.readFileSync('poster.css','utf-8');




var server = http.createServer(function(req,res){


  var headers =

console.log(headers +'whyyyyyy');

  switch(req.method) {
  case 'GET':
    switch(req.url){
    case '/':
      postQ.show(pg, res,conString);
      console.log('should have tried a query');
      break;
    case '/poster.css':
      styleu.serveCSS(res,stylesh);
      console.log('at least trying to style')

      break;
    case '/dropdown.html':
     drpdown.dropDown(res,pg,conString)

    }
    break;
  }

}).listen(3100);
console.log('server listening on 3100');






// query from skorasaurus:
// select highway, sum(st_length(st_transform(way,3637))) from planet_osm_line where highway NOT IN ('construction', 'footway', 'path', 'steps', 'track', 'cycleway', 'pedestrian', 'abandoned', 'disused') AND (service NOT IN ('parking_aisle', 'driveway') OR service is null) AND (access NOT IN ('no', 'private') or access is null) group by highway
