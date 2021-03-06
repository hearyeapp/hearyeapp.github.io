var express = require('express'),
app = express(),
path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//get request for index
app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/team', function(req, res) {
  res.sendFile(__dirname + '/views/team.html');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});