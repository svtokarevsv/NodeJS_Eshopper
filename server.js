const express = require('express');
const path = require('path');

const app = express();
app.set('port', (process.env.PORT || 5000));
app
	.use(function (req, res, next) {
		console.log(`${req.method} request for '${req.url}'`)
		next();
	})
	.get('/checkout', function (req, res) {
		res.sendFile(path.join(__dirname,'checkout.html'));
	})
	.use(express.static(__dirname))
	.listen(app.get('port'), function () {
		console.log('Node app is running on port', app.get('port'));
	});
module.exports = app;