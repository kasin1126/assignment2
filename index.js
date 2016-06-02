var restify = require("restify");
var request = require("request");
var server = restify.createServer();
var firebase = require("firebase");

firebase.initializeApp({
    serviceAccount: "proj-460.json",
    databaseURL: "https://cu-157100450.firebaseio.com/"
});

server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

var getlink= "https://ide.c9.io/kasin1126/assign/getMethod";
server.get("/getMethod", getMethod);
var getlink2= "https://ide.c9.io/kasin1126/assign/getMethod2";
server.get("/getMethod2", getMethod2);
var postlink= "https://ide.c9.io/kasin1126/assign/postMethod/test?id=id&variable1=variable1&variable2=variable2";
server.post("/postMethod/:name", postMethod);
var deletelink= "https://ide.c9.io/kasin1126/assign/deleteMethod/test?id=-KId344k6EDUJTF7otP-w5";
server.del("/deleteMethod/:name", deleteMethod);



function getMethod(req, res, next) {
    var db = firebase.database();
    var ref = db.ref("object");
    ref.once("value", function(snapshot) {
        res.json({
            getsomething: snapshot.val()
        });
    });
}


function getMethod2(req, res, next) {
    var url = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=31538fe27dd36887159b09eb67838b37";
   
    var myResult = "";
    request.get({
        url: url,
        qs: {
            q: req.query.somekey
        }
    }, function(err, response, body) {
	myResult+=body;

	
        res.write(myResult);
        res.end();

    });
}

function postMethod(req, res, next) {

    var db = firebase.database();
    var ref = db.ref("object");
    var createObject = {};
    createObject = {
        id: req.query.id,
        variable1: req.query.variable1,
        variable2: req.query.variable2
		
    };
        ref.push(createObject);
}

function deleteMethod(req, res, next) {
    var db = firebase.database();
    var ref = db.ref("object");
    ref.remove();
}


var port = process.env.PORT || 8080;
server.listen(port, function(err) {
        if (err)
            console.error(err);
        else
            console.log('App is ready at : ' + port);
    });