{"filter":false,"title":"index.js","tooltip":"/server/routes/index.js","undoManager":{"mark":56,"position":56,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var passport = require(\"passport\");","var User = require(\"../models/user\");","","//root route","router.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","// show register form","router.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","","//handle sign up logic","router.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            req.flash(\"error\", err.message);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           req.flash(\"success\", \"Successfully Signed Up! Nice to meet you \" + req.body.username);","           res.redirect(\"/campgrounds\"); ","        });","    });","});"],"id":1}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":23},"action":"remove","lines":["landing"],"id":2},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["h"]}],[{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["o"],"id":3}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["m"],"id":4}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["e"],"id":5}],[{"start":{"row":10,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// show register form","router.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});"],"id":8}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":9}],[{"start":{"row":8,"column":3},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":10}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":22},"action":"remove","lines":["register"],"id":11},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["h"]}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["o"],"id":12}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["m"],"id":13}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":38},"action":"remove","lines":["campgrounds\""],"id":15},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["s"],"id":16}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["s"],"id":17}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["e"],"id":18}],[{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"insert","lines":["s"],"id":19}],[{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"insert","lines":["s"],"id":20}],[{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"insert","lines":["m"],"id":21}],[{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"insert","lines":["e"],"id":22}],[{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"insert","lines":["n"],"id":23}],[{"start":{"row":21,"column":35},"end":{"row":21,"column":36},"action":"insert","lines":["t"],"id":24}],[{"start":{"row":21,"column":36},"end":{"row":21,"column":37},"action":"insert","lines":["s"],"id":25}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":37},"action":"remove","lines":["assessments"],"id":26},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["o"],"id":27}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["d"],"id":28}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["o"],"id":29}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"remove","lines":["o"],"id":30}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"remove","lines":["d"],"id":31}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":["o"],"id":32}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"remove","lines":["t"],"id":33}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["B"],"id":34}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["a"],"id":35}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["c"],"id":36}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["k"],"id":37}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"remove","lines":["k"],"id":38}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"remove","lines":["c"],"id":39}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":["a"],"id":40}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"remove","lines":["B"],"id":41}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["t"],"id":42}],[{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["o"],"id":43}],[{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["d"],"id":44}],[{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["o"],"id":45}],[{"start":{"row":24,"column":3},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":46}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":47}],[{"start":{"row":26,"column":0},"end":{"row":32,"column":3},"action":"insert","lines":["//handling login logic","router.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});"],"id":48}],[{"start":{"row":29,"column":27},"end":{"row":29,"column":38},"action":"remove","lines":["campgrounds"],"id":49},{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"insert","lines":["t"]}],[{"start":{"row":29,"column":28},"end":{"row":29,"column":29},"action":"insert","lines":["o"],"id":50}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["d"],"id":51}],[{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":["o"],"id":52}],[{"start":{"row":32,"column":3},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":53}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":54}],[{"start":{"row":34,"column":0},"end":{"row":42,"column":24},"action":"insert","lines":["// logout route","router.get(\"/logout\", function(req, res){","   req.logout();","   req.flash(\"success\", \"LOGGED YOU OUT!\");","   res.redirect(\"/campgrounds\");","});","","","module.exports = router;"],"id":55}],[{"start":{"row":38,"column":18},"end":{"row":38,"column":29},"action":"remove","lines":["campgrounds"],"id":56},{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":["h"]}],[{"start":{"row":38,"column":19},"end":{"row":38,"column":20},"action":"insert","lines":["o"],"id":57}],[{"start":{"row":38,"column":20},"end":{"row":38,"column":21},"action":"insert","lines":["m"],"id":58}],[{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"insert","lines":["e"],"id":59}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":0},"end":{"row":11,"column":6},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1516668519025,"hash":"5c083d844fe7666771f1a6a129e70f9a39f7ef94"}