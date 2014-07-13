var pg = require('pg');
var http = require('http');
var postQ = require('./lib/postLine.js');
var styleu = require('./lib/poststy.js');
var fs = require('fs');

var conString = "postgres://matthewmckenna:@localhost/cof";



var server = http.createServer(function(req,res){
  switch(req.method) {
  case 'GET':
    switch(req.url){
    case '/':
      postQ.show(pg,res,conString);
      console.log('should have tried a query');
      break;
    case '/poster.css':

      var stylesh = fs.readFileSync('poster.css','utf-8');
      styleu.serveCSS(res,stylesh);
      console.log('at least trying to style')

      break;
    }
    break;
  }

}).listen(3100);
console.log('server listening on 3100');






// query from skorasaurus:
// select highway, sum(st_length(st_transform(way,3637))) from planet_osm_line where highway NOT IN ('construction', 'footway', 'path', 'steps', 'track', 'cycleway', 'pedestrian', 'abandoned', 'disused') AND (service NOT IN ('parking_aisle', 'driveway') OR service is null) AND (access NOT IN ('no', 'private') or access is null) group by highway
