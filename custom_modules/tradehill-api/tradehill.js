/*** constants ***/
var API = 'https://api.tradehill.com/APIv1/USD/';
var TEST_API = 'https://api-test.tradehill.com/APIv1/USD/BuyBTC';

/*** requires ***/
var rest = require('restler');

var auth = {
	'name' : 'name',
	'pass' : 'password'
}

var typeMap = {
	'buy' : 2,
	'sell' : 1
}

var tradehill = exports;

/*** define module functions ***/

/** public data **/
tradehill.trades = function(callback) {
	return rest.get(API + 'Trades', {
		parser: rest.parsers.json
	}).on('complete', function(data) {
		callback(null, data);
	});
}

tradehill.book = function(callback) {
	return rest.get(API + 'Orderbook', {
		parser: rest.parsers.json
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

/** authenticated methods **/
tradehill.login = function(username, password) {
	_username = username;
	_password = password;
}

// check balance
tradehill.balance = function(callback) {
	rest.post(TEST_API + 'GetBalance', {
		data: auth
	}).on
	('complete', function(data){
		callback(null, data);
	});
}

// list of open orders
tradehill.orders = function(type, callback) {
	var options = auth;
	
	// include parameter to fetch only buy or sell orders
	if (type) {
		options.type = typeMap[type]
	}
	
	rest.post(TEST_API + 'GetOrders', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	});
}

tradehill.buy = function(amount, price, callback) {
	var options = auth;
	options.amount = amount;
	options.price = price;
	
	rest.post(TEST_API + 'BuyBTC', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data);
	});
}

tradehill.sell = function(amount, price, callback) {
	var options = auth;
	options.amount = amount;
	options.price = price;
	
	rest.post(TEST_API + 'SellBTC', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	}).on
	('error', function(data) {
		callback(null, data);
	});
}

tradehill.cancel = function(orderId, type, callback) {
	var options = auth;
	options.oid = orderId;
	
	// include parameter to fetch only buy or sell orders
	if (type) {
		options.type = typeMap[type]
	}
	
	rest.post(TEST_API + 'CancelOrder', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	});
}