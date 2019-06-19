const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/reduxList"), {
  useNewUrlParser: true
};

const db = mongoose.connection;

db.on('error', () => console.log(`connection error`));
db.once ('open', () => console.log (`successfully connected to database`));

const ReduxList = mongoose.Schema({
  task: String,
})

const ReduxTodo = mongoose.model('ReduxTodo', ReduxList);

module.exports = ReduxTodo;