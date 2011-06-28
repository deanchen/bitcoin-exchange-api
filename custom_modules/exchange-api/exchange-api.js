var exchanges = exports;
var _exchangeMap = null;
/*** define module functions ***/
exchanges.init = function(exchangeMap) {
	_exchangeMap = exchangeMap;
}

exchanges.trades = function(exchange) {
	return _exchangeMap[exchange].trades();
	
}

exchanges.book = function(exchange) {
	return _exchangeMap[exchange].book();
}

exchanges.ticker = function(exchange) {
	return _exchangeMap[exchange].ticker();
}

/** private functions **/
function _getExchange(exchange) {
	if (window[exchange]) {
		return window[exchange];
	} else {
		throw new Error('Exchange ' + exchange + ' does not exist');
	}
}
