/*** constants ***/
var API = 'https://mtgox.com/code/';

/*** requires ***/
var restler = require('restler');

var mtgox = exports;

/*** define module functions ***/

/** public data **/
mtgox.trades = function(callback) {
	restler.get(API + 'data/getTrades.php').on
	('complete', function(data){
		callback(null, data);
	});
}

mtgox.book = function(callback) {
	restler.get(API + 'data/getDepth.php').on
	('complete', function(data){
		callback(null, data);
	});
}

mtgox.ticker = function(callback) {
	restler.get(API + 'data/ticker.php').on
	('complete', function(data){
		callback(null, data.ticker);
	});
}