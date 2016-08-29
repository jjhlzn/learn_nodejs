var Currenty = require('currency');
var canadianDollar = 0.91;

var currency = new Currenty(canadianDollar);
console.log(currency.canadianToUS(50));