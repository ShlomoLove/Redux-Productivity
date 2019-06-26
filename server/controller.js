const db = require ('../database/index.js');

module.exports = {
  get: (req, res) => {
    db.find({}, (error, data) => {
      if (error) {
        console.log (error)
      } else {
        res.status (200).send(data)
      }
    });
  },

  post: (req, res) => {
    console.log (req.body)
    const text = req.body.text;
    const completed = req.body.completed;
    const id = req.body.id;
    new db ({
      id, text, completed
    }).save((error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send(data)
      }
    })
  },

  delete: (req, res) => {
    const str = req.body.task;
    db.deleteOne({text: str}, (error, data) => {
      if (error) {
        console.log (error)
      } else {
        res.status(202).send('task deleted');
      }
    })
  },

  patch: (req, res) => {
    let checkId = req.body.params.id;
    let newCompleted = req.body.params.completed;
    db.update (
      {id: checkId},
      {$set: {completed: newCompleted}}
    )
    .then(() => {
      console.log ('completed update')
      res.status(201).send('successful update');
    })
    .catch((error) => {
      res.status(404).send(error);
    })
  }
}
// const getTodo = (req, res) => {
//   db.findOne({ id: req.params.id})
//   .then(todo => {
//     res.json(item)
//   })
//   .catch(error => {
//     res.status(400).send(`error processing request: ${error}`);
//   })
// };