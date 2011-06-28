/*** constants ***/
var API = 'https://api.tradehill.com/APIv1/USD/';
var TEST_API = 'https://api-test.tradehill.com/APIv1/USD/BuyBTC';

/*** requires ***/
var rest = require('restler');

var tradehill = exports;

/*** define module functions ***/

/** public data **/
tradehill.trades = function(callback) {
	return rest.get(API + 'Trades', {
		parsar: parsers.json
	}).on('complete', function(data) {
		callback(null, data);
	});
}

tradehill.book = function(callback) {
	return rest.get(API + 'Orderbook', {
		parsar: parsers.json
	}).on('complete', function(data) {
		callback(null, data);
	});
}

tradehill.ticker = function(callback) {
	return rest.get(API + 'Ticker', {
		parser: rest.parsers.json
	}).on('complete', function(data) {
		callback(null, data.ticker);
	});
}