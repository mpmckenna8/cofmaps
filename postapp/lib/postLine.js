// for if i want to do form stuff var postQ = require('./lib/postline.js');

exports.sendHtml = function(res,html){
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Length', Buffer.byteLength(html));
  res.end(html);
  console.log('now sending content')

}

exports.show = function(pg,res,conString){
  var client = new pg.Client(conString);
  var queryStr = 'SELECT * FROM coffee ORDER BY year2011 DESC';
  var html = '<head><link rel="stylesheet" href="/poster.css" /></head><body><h1>Coffee production in 2011</h1>';

  html += exports.quer2tab(client, queryStr, html,res);


}


exports.quer2tab = function(client, querySt, html,res){
  html += '<table><tr><th class=\'country\'>Countries</th><th>Amount (kilos)</th><th>Code maybe UN</th></tr>';
  client.connect(function(err){
      if(err) {
        return console.error('could not connect to postgres', err);
      }

    })

    var query = client.query(querySt);
    query.on('row',function(row){
      html+= '<tr>';
      html+= '<td>' + row.countries + '</td>';
      html += '<td>' + row.year2011 +'</td>';
      html += '<td>'+ row.countrycodes  +'</td>';

      html+= '</tr>';
      //console.log(row);

    })

    query.on('end',function(){
      //client.end();
      console.log('this pgsql session should be closed')
      html += '</table></body>';

      exports.sendHtml(res,html);
    })



  return html
}
