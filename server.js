var exchanges = require('./custom_modules/exchange-api');

/** declare exchange specific api to be used by exchanges api **/
var mtgox = require('./custom_modules/mtgox-api');
var tradehill = require('./custom_modules/tradehill-api');

exchanges.init({
	"mtgox" : mtgox,
	"tradehill" : tradehill
});

exchanges.ticker('mtgox', function(err, data) {
	console.log('mtgox ticker data');
	console.log(data);
});

exchanges.ticker('tradehill', function(err, data) {
	console.log('tradehill ticker data');
	console.log(data);
});
