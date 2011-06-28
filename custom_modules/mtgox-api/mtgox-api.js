/*** constants ***/
var API = 'https://mtgox.com/code/';

/*** requires ***/
var restler = require('restler');

var mtgox = exports;

/*** define module functions ***/

/** public data **/
mtgox.trades = function() {
	return restler.get(API + 'data/ticker.php');
}

mtgox.book = function() {
	return restler.get(API + 'data/getDepth.php');
}

mtgox.ticker = function() {
	return restler.get(API + 'getTrades.php');
}