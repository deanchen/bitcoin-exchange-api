var fs = require('fs');

var exchanges = require('../../exchange-api');

/** declare exchange specific api to be used by exchanges api **/
var mtgox = require('../../mtgox-api');
var tradehill = require('../../tradehill-api');

var exchangeMap = {
	"mtgox" : mtgox,
	"tradehill" : tradehill
};
exchanges.init(exchangeMap);

outputTest('ticker');
outputTest('book');
outputTest('trades');

function outputTest(method) {
	Object.keys(exchangeMap).forEach(function(exchange) {
		exchanges[method](exchange, function(err, data) {
			console.log(exchange + ' ' + method + ' fetched');
			fs.writeFile(__dirname + '/output/' + exchange + '-' + method + '.json',
				JSON.stringify(data, null, '\t'));
		});
	});
}
