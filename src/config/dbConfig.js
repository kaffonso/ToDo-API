const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.vxnom.mongodb.net/Annotations?retryWrites=true&w=majority';

//variavel para conectar o backend com o mongodb
const connection = mongoose.connect(dbConfig,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
