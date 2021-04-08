var soap = require('soap');
var url = 'http://localhost:8080/asd?wsdl';

soap.createClient(url, function(err, client) {
    if (err) throw err;
    console.log(client.describe().ws.calc);
    client.multiplicar({a: 4,b: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
    client.sumar({a: 4,b: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
});