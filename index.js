var soap = require('soap');
var url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';
var args = {name: 'sCode'};
soap.createClient(url, function(err, client) {
  var x = client.describe();
  console.log(x);
});