var soap = require('soap');

function iso_code (countryName, callback) {

	var url = 'http://www.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';
	var args = {"sCountryName": countryName};

	soap.createClient(url, function(err, client) {

		if (err) return callback(err);

		client.CountryISOCode(args, function(err, result) {
	    	if (err) return callback(err);
			//no error
			callback(null, result);
		});
		
	});

}

exports.iso_code = iso_code;