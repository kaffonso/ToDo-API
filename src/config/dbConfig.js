const mongoose = require('mongoose');

const dbConfig = process.env.DB_CONFIG;

//variavel para conectar o backend com o mongodb
const connection = mongoose.connect(dbConfig,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
