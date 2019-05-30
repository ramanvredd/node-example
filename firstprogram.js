var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	var moduleexample=require('./moduleexample.js');
	var localTutor=require('./Extendmoduleexample.js');

localTutor.NodeTutorial();
//var tut = new localTutor.NodeTutorial();  // Create and save object
new localTutor.NodeTutorial().pTutor();  // Call function on object

    res.end('Hello World!'+'Ello Again '+moduleexample.moduleexample(1,2));
}).listen(8080);
