/* global $ */
/* global Survey */

Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";


var goalJSON = {title:"First Year SMART Goal",
         pages:[
           {name:"page1",elements:[{type:"comment",name:"goal1",title:"In the space provided below, write a specific SMART goals that you would like to accomplish by the end of the academic year. Remember: Provide as much detail as needed to enable your anyone - a friend, professor or your advisor - to picture it clearly in their mind. "}]},
           {name:"page2",elements:[{type:"comment",name:"goal2",title:"Good start. Read what your goal again. Have you made it clear how you will know you have accomplished it? How will you measure your success?"}]},
           {name:"page3",elements:[{type:"comment",name:"goal3",title:"Is your goal achievalble?"}]},
           {name:"page4",elements:[{type:"comment",name:"goal4",title:"Is your goal relevant?"}]},
           {name:"page5",elements:[{type:"comment",name:"goal5",title:"Is your goal timely?"}]},
           {name:"page6",elements:[{type:"comment",name:"goal6",title:"Review your goal one last time and then submit."}]}
           ],
           
           showProgressBar:"bottom",goNextPageAutomatic:true}


var newGoal = new Survey.Model(goalJSON);

function sendDataToServer(newGoal) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(newGoal.data));
}

$("#surveyContainer").Survey({
    model: newGoal,
    onComplete: sendDataToServer
});

function sendDataToTheServer(isComplete, data) {
    var text = isComplete ? "The goal is completed" : "The goal is not completed";
    document.querySelector('#surveyResult').innerHTML = text + ", result: " + JSON.stringify(data);
}

newGoal.onComplete.add(function(survey, options) {
    sendDataToTheServer(true, newGoal.data);
});

newGoal.onPartialSend.add(function(survey, options) {
    sendDataToTheServer(false, newGoal.data);
});

$("#surveyElement").Survey({ 
    model: newGoal 
});