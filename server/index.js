const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const app = express();
const port = 3000;



//middleware
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use('/', router);

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`I'll listen to you any day on ${port}!`))