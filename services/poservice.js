var fs = require('fs');
var path = require('path');
var poServiceXml = fs.readFileSync(path.join(path.join(__dirname, 'wsdl'), 'wscalc1.wsdl'), 'utf8');

// var poService = {
//   PurchaseOrderService: {
//       PurchaseOrderServiceSoapHttpPort: {
//           getPurchaseOrder: function(args) {
//               console.log('====================================');
//               console.log("asd");
//               console.log('====================================');
//               console.log(args);
//               return {
//                   name: args.name
//               };
//           }
//       }
//    }
// };


 
const poService = {
    ws: {
      calc: {
         sumar : function(args) {
           console.log('====================================');
           console.log("sumar",args);
           console.log('====================================');
            var n = 1*args.a + 1*args.b;
            return { sumres : n };
         },
         multiplicar : function(args) {
            console.log('====================================');
            console.log("multiplicar",args);
            console.log('====================================');
            var n = args.a * args.b;
            return { mulres : n };
         }
         ,
         divRes : function(args) {
            console.log('====================================');
            console.log("divRes",args);
            console.log('====================================');
            var n = args.a / args.b;
            return { divres : n };
         }
       }
     }
  };
 
// const service = {
//     ws: {
//       calc: {
//          sumar : function(args) {
//            console.log('====================================');
//            console.log("args",args);
//            console.log('====================================');
//             var n = 1*args.a + 1*args.b;
//             return { sumres : n };
//          },
//          multiplicar : function(args) {
//             var n = args.a * args.b;
//             return { mulres : n };
//          }
//        }
//      }
//   };

module.exports = {
  service: poService,
  xml: poServiceXml
};