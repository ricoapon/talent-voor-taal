const express = require('express');
const app = express();

app.use(express.static('./dist/talent-voor-taal'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/talent-voor-taal/'}
  );
});

app.listen(process.env.PORT || 8080);
