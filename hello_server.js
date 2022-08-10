'use strict';

/*
 * [FILE] hello_server.js
 *
 * [DESCRIPTION]
 *  Lesson 1a - 「こんにちは」を表示する簡単なWebサーバー
 * 
 * [NOTE]
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end('<h1>こんにちは！</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*
 * END OF FILE
 */