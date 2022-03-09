const express = require('express');
const routes = require('./routes');
const cors = require('cors')

require('./config/dbConfig') 

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333); 