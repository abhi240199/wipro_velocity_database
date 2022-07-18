const Todo = require("../models/Todo");

module.exports.createTask = async function (req, res) {
  console.log(req.body);
  var task = await Todo.create({
    title: req.body.title,
    text: req.body.text,
    id: req.body.id,
    completed: req.body.completed,
  });
  return res.send(task);
};
module.exports.getTasks = async function (req, res) {
  var task = await Todo.find({});
  return res.send(task);
};
module.exports.pendingTasks = async function (req, res) {
  var task = await Todo.find({
    completed: false,
  });

  return res.send(task);
};
module.exports.completedTasks = async function (req, res) {
  var task = await Todo.find({
    completed: true,
  });

  return res.send(task);
};
module.exports.deleteTask = async function (req, res) {
  var task = await Todo.findOneAndDelete({
    id: req.params.id,
  });

  return res.send(task);
};

module.exports.doneTask = async function (req, res) {
  var task = await Todo.findOneAndUpdate(
    {
      id: req.params.id,
    },
    {
      completed: true,
    }
  );

  return res.send(task);
};
