var http = require('http');

// create a server object
http.createServer(function (req, res) {
    console.log('request in')
    res.write('This is Knock test web');
    res.end();
}).listen(3001, function () {
    console.log('server start at port 3001')
});