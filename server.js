const express = require('express');
const app = express();
app
	.use(function (req, res, next) {
		console.log(`${req.method} request for '${req.url}'`)
		next();
	})
	.use(express.static(__dirname));
app.listen(3000);
console.log('http://localhost:3000/');
module.exports = app;