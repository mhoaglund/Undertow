var rita = require("rita"),
twilio = require('twilio');

exports.handler = function(event, context) {
    var twiml = new twilio.TwimlResponse();
    twiml.say({voice:'woman'}, 'Oh,,,,,,');
    twiml.say({voice:'woman'}, 'When it arrives you wont know');
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