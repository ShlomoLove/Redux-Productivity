const mongoose = require ('mongoose');
mongoose.connect("mongodb://localhost/reduxList"), {
  useNewUrlParser: true
};

const db = mongoose.connection;

db.on('error', () => console.log(`connection error`));
db.once ('open', () => console.log (`successfully connected to database`));

const ReduxList = mongoose.Schema({
  id: Number,
  text: String,
  completed: Boolean
})

const ReduxTodo = mongoose.model('ReduxTodo', ReduxList);

module.exports = ReduxTodo;