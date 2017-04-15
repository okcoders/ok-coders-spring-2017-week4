var restify = require('restify');
var server = restify.createServer();
var port = 8088;

// /blogs/posts/comments/
//
// CRUD   | mongoDB | REST
// -------|---------|------
// create | insert  | POST
// read   |  find   | GET
// update | update  | PUT
// delete | remove  | DELETE

// server.verb('path' function(req, res, next){})
function send(req, res, next){
	res.send("Testing " + req.params.test);
	return next;
}

server.get('/', send);
server.get('/hello/:test', send);
server.put('/hello/:test', send);
server.del('/hello/:test', function(req, res, next){
	res.send(req.params.test + " is now gone... deleted");
	return next();
});

server.listen(port, function(){
	console.log('%s listening at %s', server.name, port);
});