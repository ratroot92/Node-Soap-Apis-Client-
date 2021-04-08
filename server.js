const  fs = require('fs');
const  config = require('./config');
const  app = require('./app');
const  debug = require('debug')('po-service:server');
const  http = require('http');
const  https = require('https');
const  soap = require('soap');
const  path = require('path');
const poService = require('./services/poservice');

/**
 * Get port from environment and store in Express.
 */

// const  port = normalizePort(process.env.PORT || config.get('app.port'));
const  port = normalizePort(8080);
app.set('port', port);

/**
 * Create HTTP server or HTTPS server
 */
const  server = http.createServer(app);
// if(config.get('app.https')) {
//   server = https.createServer({
//     // key: fs.readFileSync(config.get('app.serverkey')),
//     // cert: fs.readFileSync(config.get('app.servercert'))
//   }, app);
// }

/**
 * Listen on provided port, on all network interfaces.
 */

;
 
//  const service = {
//    ws: {
//      calc: {
//         sumar : function(args) {
//           console.log('====================================');
//           console.log("args",args);
//           console.log('====================================');
//            var n = 1*args.a + 1*args.b;
//            return { sumres : n };
//         },
//         sumar : function(args) {
//           console.log('====================================');
//           console.log("args",args);
//           console.log('====================================');
//            var n = 1*args.a + 1*args.b;
//            return { sumres : n };
//         },
//         multiplicar : function(args) {
//            var n = args.a * args.b;
//            return { mulres : n };
//         }
//       }
//     }
//  };

//  const xml = require('fs').readFileSync('/home/asd/Desktop/development/soapApi/services/wsdl/wscalc1.wsdl', 'utf8');
//   server = http.createServer(function(request,response) {
//   response.end("404: Not Found: "+request.url);
// });

// server.listen(8080);
// soap.listen(server, '/wscalc1', service, xml);

//  const xml = require('fs').readFileSync('/home/asd/Desktop/development/soapApi/services/wsdl/wscalc1.wsdl', 'utf8');

function startServer() {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  // soap.listen(server, '/api/soap', service, xml,(err)=>{
   soap.listen(server, '/api/soap', poService.service, poService.xml,(err)=>{
     
      if(err){
          console.log("Error \n "+err )
      }
      else{
          console.log("Server Started ....",port)
      }
  });
}

if(!module.parent) {
  // Start server if file is run directly
  startServer();
} else {
  // Export server, if file is referenced via cluster
  module.exports = startServer;
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const  port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    console.log('====================================');
    console.log("OnError");
    console.log('====================================');
  if (error.syscall !== 'listen') {
    throw error;
  }

  const  bind = typeof port === 'string'
  ? 'Pipe ' + port
  : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
          console.log('====================================');
          console.log("onListening");
          console.log('====================================');
  const  addr = server.address();
  const  bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
