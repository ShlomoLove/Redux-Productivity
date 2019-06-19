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
    const task = req.body.task;
    new db ({
      task
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
    db.deleteOne({task: str}, (error, data) => {
      if (error) {
        console.log (error)
      } else {
        res.status(202).send('task deleted');
      }
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