/*** constants ***/
var API = 'https://api.tradehill.com/APIv1/USD/';
var TEST_API = 'https://api-test.tradehill.com/APIv1/USD/BuyBTC';

/*** requires ***/
var restler = require('restler');

var tradehill = exports;

/*** define module functions ***/

/** public data **/
tradehill.trades = function() {
	return restler.get(API + 'Trades');
}

tradehill.book = function() {
	return restler.get(API + 'Orderbook');
}

tradehill.ticker = function() {
	return restler.get(API + 'Ticker');
}