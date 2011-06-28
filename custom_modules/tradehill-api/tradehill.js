/*** constants ***/
var API = 'https://api.tradehill.com/APIv1/USD/';
var TEST_API = 'https://api-test.tradehill.com/APIv1/USD/BuyBTC';

/*** requires ***/
var rest = require('restler');

var tradehill = exports;

/*** define module functions ***/

/** public data **/
tradehill.trades = function() {
	return rest.get(API + 'Trades', {
		parsar: parsers.json
	});
}

tradehill.book = function() {
	return rest.get(API + 'Orderbook', {
		parsar: parsers.json
	});
}

tradehill.ticker = function() {
	console.log(rest.parsers.json)
	return rest.get(API + 'Ticker', {
		parser: rest.parsers.json
	});
}