var events = require('events');

var exchanges = exports;

var _exchangeMap = null;
/*** define module functions ***/
exchanges.init = function(exchangeMap, callback) {
	_exchangeMap = exchangeMap;
}

exchanges.trades = function(exchange, callback) {
	_exchangeMap[exchange].trades(callback);
}

exchanges.book = function(exchange, callback) {
	_exchangeMap[exchange].book(callback);
}

exchanges.ticker = function(exchange, callback) {
	_exchangeMap[exchange].ticker(callback);
}


exchanges.balance = function(exchange, callback) {
	_exchangeMap[exchange].balance(callback);
}

exchanges.orders = function(exchange, type, callback) {
	_exchangeMap[exchange].orders(type, callback);
}
