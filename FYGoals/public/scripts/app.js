/* global $ */
$(document).ready(function(){
  $.getJSON("/api/goals")
  .then(addGoal)
  
  $('#goalInput').keypress(function(event){
    if(event.which == 13) {
      createGoal();
    }
  });
  
  $('.list').on('click', 'li', function(){
    updateGoal($(this));
  })
  
  $('.list').on('click', 'span', function(e){
    e.stopPropagation();
    removeGoal($(this).parent());
  })
});

function addGoal(goal) {
  //add goals to page here
  goal.forEach(function(goal){
    addGoal(goal);
  });
}

function addGoal(goal) {
var newGoal = $('<li class="task">'+goal +' </li>');
  newGoal.data('id', goal._id);
  newGoal.data('completed', goal.completed);
  if(goal.completed){
    newGoal.addClass("done");
  }
  $('.list').append(newGoal);
}

function createGoal(){
  //send request to create new todo
  var usrInput = $('#goalInput').val();
  $.post('/api/goals',{goal: usrInput})
  .then(function(newGoal){
    $('#goalInput').val('');
    addGoal(newGoal);
  })
  .catch(function(err){
    console.log(err);
  })
}

function removeGoal(goal){
  var clickedId = goal.data('id');
  var deleteUrl = '/api/goals/' + clickedId; 
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data){
    goal.remove();
  })
  .catch(function(err){
    console.log(err);
  })
}

function updateGoal(goal){
  var updateUrl = '/api/goals/' + goal.data('id');
  var isDone = !goal.data('completed');
  var updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedGoal){
    goal.toggleClass("done");
    goal.data('completed', isDone);
  })
}