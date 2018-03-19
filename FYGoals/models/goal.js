var mongoose = require("mongoose");

var goalSchema = new mongoose.Schema ({
    
    goal1: String, 
    goal2: String,
    goal3: String,
    goal4: String,
    goal5: String,
    goal6: String,
    
    user: {
        id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
          },
      
      username: String
      
        },
    
    created_date:  
        {
            type: Date, 
            default: Date.now
            
        }
    
   });
   
   var Goal = mongoose.model('Goal', goalSchema);
   
   module.exports = mongoose.model("Goal", goalSchema);