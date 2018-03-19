var express = require('express'),
    router = express.Router(),
    db = require("../models"),
    helpers = require("../helpers/index");

router.route('/')
 .get(helpers.getGoals)
 .post(helpers.createGoal)
 
router.route('/:todoId')
  .get(helpers.getGoal)
  .put(helpers.updateGoal)
  .delete(helpers.deleteGoal)
  
module.exports = router;
