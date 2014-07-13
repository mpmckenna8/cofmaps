var pg = require('pg');
var http = require('http');
var postQ = require('./lib/postLine.js');
var fs = require('fs');
var styleu = require('./lib/poststy.js');


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
