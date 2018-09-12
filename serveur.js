const express = require('express')
const app = express();
var path = require('path');

app.use('/', express.static('dist/e-thik'))

app.listen(80, () => console.log('Example app listening on port 80!'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/e-thik/index.html'));
});
