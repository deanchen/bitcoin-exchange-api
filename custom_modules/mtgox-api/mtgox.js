/*** constants ***/
var API = 'https://mtgox.com/code/';

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

var mtgox = exports;

/*** define module functions ***/

/** public data **/
mtgox.trades = function(callback) {
	rest.get(API + 'data/getTrades.php').on
	('complete', function(data){
		callback(null, data);
	});
}

mtgox.book = function(callback) {
	rest.get(API + 'data/getDepth.php').on
	('complete', function(data){
		callback(null, data);
	});
}

mtgox.ticker = function(callback) {
	rest.get(API + 'data/ticker.php').on
	('complete', function(data){
		callback(null, data.ticker);
	});
}

/** authenticated methods **/
mtgox.login = function(username, password) {
	_username = username;
	_password = password;
}

// check balance
mtgox.balance = function(callback) {
	rest.post(API + 'getFunds.php', {
		data: auth
	}).on
	('complete', function(data){
		callback(null, data);
	});
}

// list of open orders
mtgox.orders = function(type, callback) {
	var options = auth;
	
	// include parameter to fetch only buy or sell orders
	if (type) {
		options.type = typeMap[type]
	}
	
	rest.post(API + 'getOrders.php', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	});
}

mtgox.buy = function(amount, price, callback) {
	var options = auth;
	options.amount = amount;
	options.price = price;
	
	rest.post(API + 'buyBTC.php', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data);
	});
}

mtgox.sell = function(amount, price, callback) {
	var options = auth;
	options.amount = amount;
	options.price = price;
	
	rest.post(API + 'sellBTC.php', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	});
}

mtgox.cancel = function(orderId, type, callback) {
	var options = auth;
	options.oid = orderId;
	
	// include parameter to fetch only buy or sell orders
	if (type) {
		options.type = typeMap[type]
	}
	
	rest.post(API + 'cancelOrder.php', {
		data: options
	}).on
	('complete', function(data){
		callback(null, data.orders);
	});
}
