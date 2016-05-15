var rita = require("rita"),
twilio = require('twilio');

//This should be a triptych, ending with an OSS directive.

var OSSdirectives = [
    'A clean factory is not susceptible to fire, but a dirty one is.',
    'Workers should be careless with refuse and janitors should be inefficient in cleaning.',
    'Ruin warehouse stock by setting the automatic sprinkler to work.',
    'Let cutting tools grow dull.',
    'Jam paper, bits of wood, hairpins, and anything else that will fit, into locks of all unguarded entrances to public buildings.',
    'Leave saws slightly twisted when you are not using them. After a while, they will break when used.',
    'Forget to provide paper in toilets.',
    'Spoil stores of grain, fruit and vegetables by soaking them in water so that they will rot.',
    'Send up quantities of rock and other useless material with the coal.',
    'Never permit shortcuts to be taken in order to expedite decisions.',
    'When possible, refer all matters to committees, for further study and consideration.',
    'Talk as frequently as possible, and at great length.',
    'When training new workers, give incomplete or misleading instructions.',
    'Demand written orders.',
    'Hold conferences when there is more critical work to be done.',
    'Advocate caution.',
    'Prolong correspondense with government bureaus.',
    'Complain against ersatz materials.',
    'Cry or sob hysterically at every occasion, especially when confronted by government clerks.',
    'Always be profuse with your apologies.'
];
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