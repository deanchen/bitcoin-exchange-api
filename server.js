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
var amount = 0.001;
var price = 1;
exchanges.balance('mtgox', function(err, data) {
	console.log(data)
});
