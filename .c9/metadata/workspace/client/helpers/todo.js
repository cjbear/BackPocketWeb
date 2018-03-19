{"changed":true,"filter":false,"title":"todo.js","tooltip":"/client/helpers/todo.js","value":"var db = require('../models');\n\nexports.getTodos = function(req, res){\n    db.Todo.find()\n    .then(function(todos){\n        res.json(todos);\n    })\n    .catch(function(err){\n        res.send(err);\n    })\n}\n\nexports.createTodo = function(req, res){\n  db.Todo.create(req.body)\n  .then(function(newTodo){\n      res.status(201).json(newTodo);\n  })\n  .catch(function(err){\n      res.send(err);\n  })\n}\n\nexports.getTodo = function(req, res){\n   db.Todo.findById(req.params.todoId)\n   .then(function(foundTodo){\n       res.json(foundTodo);\n   })\n   .catch(function(err){\n       res.send(err);\n   })\n}\n\nexports.updateTodo =  function(req, res){\n   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})\n   .then(function(todo){\n       res.json(todo);\n   })\n   .catch(function(err){\n       res.send(err);\n   })\n}\n\nexports.deleteTodo = function(req, res){\n   db.Todo.remove({_id: req.params.todoId}) \n   .then(function(){\n       res.json({message: 'We deleted it!'});\n   })\n   .catch(function(err){\n       res.send(err);\n   })\n}\n\nmodule.exports = exports;","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":52,"column":25},"action":"insert","lines":["var db = require('../models');","","exports.getTodos = function(req, res){","    db.Todo.find()","    .then(function(todos){","        res.json(todos);","    })","    .catch(function(err){","        res.send(err);","    })","}","","exports.createTodo = function(req, res){","  db.Todo.create(req.body)","  .then(function(newTodo){","      res.status(201).json(newTodo);","  })","  .catch(function(err){","      res.send(err);","  })","}","","exports.getTodo = function(req, res){","   db.Todo.findById(req.params.todoId)","   .then(function(foundTodo){","       res.json(foundTodo);","   })","   .catch(function(err){","       res.send(err);","   })","}","","exports.updateTodo =  function(req, res){","   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})","   .then(function(todo){","       res.json(todo);","   })","   .catch(function(err){","       res.send(err);","   })","}","","exports.deleteTodo = function(req, res){","   db.Todo.remove({_id: req.params.todoId}) ","   .then(function(){","       res.json({message: 'We deleted it!'});","   })","   .catch(function(err){","       res.send(err);","   })","}","","module.exports = exports;"],"id":1}]]},"ace":{"folds":[],"scrolltop":211.5,"scrollleft":0,"selection":{"start":{"row":52,"column":25},"end":{"row":52,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1516716763519}