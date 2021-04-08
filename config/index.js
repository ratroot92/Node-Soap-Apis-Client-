const path =require('path')
var PropertiesReader = require('properties-reader');
var config = new require(path.join(__dirname,'app.properties'));

module.exports = config;