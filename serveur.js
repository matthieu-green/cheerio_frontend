const express = require('express')
const app = express();
var path = require('path');

app.use('/', express.static('dist/my-web-app'))

app.listen(4000, () => console.log('Example app listening on port 4000!'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-web-app/index.html'));
});
