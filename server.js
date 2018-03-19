var express       = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    cookieParser  = require("cookie-parser"),
    LocalStrategy = require("passport-local"),
    flash         = require("connect-flash"),
    Goal          = require("/client/models/goal"),
    Priority      = require("/client/models/priority"),
    Siw           = require("/client/models/siw"),
    User          = require("/client/models/user"),
    session       = require("express-session"),
    methodOverride = require("method-override");
    
//requiring routes
var goalRoutes       = require("./routes/goals"),
    prioritiesRoutes = require("./routes/priorities"),
    siwRoutes        = require("./routes/siws"),
    indexRoutes      = require("./routes/index")
    
mongoose.connect("mongodb://localhost/assessments");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "BackPocketEnzo",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});


app.use("/", indexRoutes);
app.use("/goals", goalRoutes);
app.use("/siws", siwRoutes);
app.use("/priorities", prioritiesRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The assessment server started.");
});