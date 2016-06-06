var rita = require("rita"),
scraper = require("scrape-it"),
nlp = require("nlp_compromise"),
twilio = require('twilio');

//This should be a triptych, ending with an OSS directive.

//Start with an aphorism!
var Aphorisms = [
    'The biggest piece of propaganda',
    'Knowing is half the battle',
    'You havent got a lot on your mind',
    'Remind yourself that leisure is not work while you still can',
    'While you still can',
    'Knowing is none of the battle',
    'Try to remember a time when you werent disgusted',
    'One of the chances is your last chance',
    'You dont have to know what is wrong with anyone, but you have to fulfill your obligation to them', 
    'If a stranger directs their anger toward you, you should have helped them sooner',
    'You cant use the same names for people or things forever',
    'Being nourished is more important than understanding what is happening',
    'Taste is poor',
    'Be a perfectionist and learn the sickening feeling of flawed work',
    '' 
];

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

// *** prod lambda handler
// exports.handler = function(event, context) {
//     var twiml = new twilio.TwimlResponse();
//     twiml.say({voice:'woman'}, 'Hm,,,,,,Part One,,,,,,');
//     twiml.say({voice:'woman'}, 'When it arrives you wont know,,,,');
//     //module one
//     twiml.say({voice:'woman'}, ',,,,,,Part Two,,,,,,');
//     twiml.say({voice:'woman'}, 'So far,, so good,,,,');
//     //module two
//     twiml.say({voice:'woman'}, ',,,,,,Part Three,,,,,,');
//     twiml.say({voice:'woman'}, 'To Do,,,,');
//     //module three
//     var output = '<?xml version="1.0" encoding="UTF-8"?>' + twiml.toString() + '</Response>';
//     context.succeed(output);
// };

//using this for debugging responses
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var twiml = new twilio.TwimlResponse();
  twiml.say({voice:'woman'}, 'Pain,,,,,Ruin');
  //RetrieveSeed("https://en.wikipedia.org/wiki/J_Dilla");
  res.end(twiml.toString());
}).listen(8124, "127.0.0.1");

RetrieveSeed("https://en.wikipedia.org/wiki/J_Dilla");

//Objective: clear proper names and companies out of text.
function StripPropers(input, callback){
    callback();
}

function AggregateArrayPropertyToString(propertyname, arr, callback){
    var aggregate = "";
    for (var i=0,  tot=arr.length; i < tot; i++) {
        aggregate += arr[i][propertyname];
        aggregate += " ";
        if(i == (tot-1)){
            callback(aggregate);
        }
    }
}

//Objective: grab sample text from a domain
function RetrieveSeed(input){
    scraper(input, {
        // Fetch the articles
        fragments: {
            listItem: ".mw-content-ltr > div.hatnote"
            //data doesn't end up as a property, FYI
        , data: {
               content: {
                //listItem: "p",
                how: "text"
                }
            }
        }
    }, (err, page) => {
        //console.log(err || page);
        if(!err){
            AggregateArrayPropertyToString("content", page.fragments, function(data){
                console.log("Page Dump:" + data);
            })
        }
    });
}