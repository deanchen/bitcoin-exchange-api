var fs = require('fs');
var exchanges = require('./custom_modules/exchange-api');

/** declare exchange specific api to be used by exchanges api **/
var mtgox = require('./custom_modules/mtgox-api');
var tradehill = require('./custom_modules/tradehill-api');

exchanges.init({
	"mtgox" : mtgox,
	"tradehill" : tradehill
});

exchanges.ticker('mtgox', function(err, data) {
	console.log('mtgox ticker fetched');
	fs.writeFile('output/mtgox-ticker.json', 
		JSON.stringify(data, null, '\t'));
});

exchanges.ticker('tradehill', function(err, data) {
	console.log('tradehill ticker fetched');
	fs.writeFile('output/tradehill-ticker.json',
		JSON.stringify(data, null, '\t'));
});

exchanges.book('mtgox', function(err, data) {
	console.log('mtgox book fetched');
	fs.writeFile('output/mtgox-book.json',
		JSON.stringify(data, null, '\t'));
});

exchanges.book('tradehill', function(err, data) {
	console.log('tradehill book fetched');
	fs.writeFile('output/tradehill-book.json',
		JSON.stringify(data, null, '\t'));
});

exchanges.trades('mtgox', function(err, data) {
	console.log('mtgox trades fetched');
	fs.writeFile('output/mtgox-trades.json',
		JSON.stringify(data, null, '\t'));
});

exchanges.trades('tradehill', function(err, data) {
	console.log('tradehill trades fetched');
	fs.writeFile('output/tradehill-trades.json',
		JSON.stringify(data, null, '\t'));
});
