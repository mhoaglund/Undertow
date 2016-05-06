//var nconf = require('nconf'),
var path = require('path'),
rita = require("rita"),
twilio = require('twilio');

//nconf.argv().file({file: 'config.json'});
//global.TwilioClient = require('twilio')(nconf.get('twilioAccountKey'), nconf.get('twilioAuthToken'));

exports.handler = function(event, context) {
    var twiml = new twilio.TwimlResponse();
    twiml.say({voice:'woman'}, 'Pain,,,,,Ruin');
    var output = '<?xml version="1.0" encoding="UTF-8"?>' + twiml.toString() + '</Response>';
    context.succeed(output);
};

//using this for debugging responses
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var twiml = new twilio.TwimlResponse();
//   twiml.say({voice:'woman'}, 'Pain,,,,,Ruin');
//   res.end(twiml.toString());
// }).listen(8124, "127.0.0.1");