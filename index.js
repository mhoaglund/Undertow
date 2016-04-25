var nconf = require('nconf'),
path = require('path'),
rita = require("rita"),
twilio = require('twilio');

nconf.argv().file({file: 'config.json'});
global.TwilioClient = require('twilio')(nconf.get('twilioAccountKey'), nconf.get('twilioAuthToken'));

var routes = require('./routes/main');

//using this for debugging responses
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8124, "127.0.0.1");