const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/imgs', express.static('imgs'));

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(process.env.PORT, process.env.IP);

// app.listen('3000', () => {
// 	hostname = '127.0.0.1';
// 	port = 3000;
// 	console.log(`Portfolio running at http://${hostname}:${port}/`);
// });
