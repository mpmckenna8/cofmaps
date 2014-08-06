var querStr = "SELECT column_name FROM information_schema.columns WHERE table_name='coffee'";


exports.sedhtml = function(res,colFie) {
var content = '<p>errr'+html+'</p>';
console.log(html);


  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
  console.log('now sending content')

}




exports.dropDown = function(res,pg,conSt){
  console.log(querStr);
  var client = new pg.Client("postgres://matthewmckenna:@localhost/cof");

  client.connect(function(err){
      if(err) {
        return console.error('could not connect to postgres', err);
      }

    })

  client.query(querStr,function(err,result){
    if(err)throw err;
    var colFie = result.rows;


    colFie.forEach(function(hmm){
      console.log(hmm.column_name);
    });
    client.end();
    sedhtml(res, colFie);
  })

}
