const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// conection to mongodb di docker
mongoose.connect('mongodb://localhost:27017/mydb', { useUnifiedTopology: true, useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json())

app.use(cors())


// entry point
app.use('/', require('./routes/index.route'))

// port running
const port = 3000 | process.env.PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})