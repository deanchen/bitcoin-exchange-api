var fs = require('fs');
var exchanges = require('./custom_modules/exchange-api');

/** declare exchange specific api to be used by exchanges api **/
var mtgox = require('./custom_modules/mtgox-api');
var tradehill = require('./custom_modules/tradehill-api');

exchanges.init({
	"mtgox" : mtgox,
	"tradehill" : tradehill
});

// see custom_modules/exchange-api/test/text-exchange-api.js for full function usage examples
var amount = 0.01;
var price = 100;

exchanges.sell('tradehill', amount, price, function(err, data) {
	console.log(data)
});

