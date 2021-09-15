const express = require('express');
const app = express();
const fs = require('fs');
var users = fs.readFileSync('./sample.json', 'utf-8');
users = JSON.parse(users);
app.use('/users/:id?', (req, res, next) => {
	if (req.params.id) {
		id = req.params.id - 1;//to make it all quick
		res.send(users[id]);

	}
	else {
		//id does not exist
		res.send(users)
	}
})
app.listen(5001, 'localhost', () => {
	console.log('listening on port 5001 of localhost');
})