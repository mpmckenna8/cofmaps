var fs = require('fs');


fs.readFile('poster.css', 'utf8', function(err, mestyle){
  if(err)throw err;
  console.log(mestyle);
})
