var soap = require('soap')
var url = 'http://localhost:8000/?WSDL'
var args = {"name": "supanat", "univ": "chula", "country": "Thailand"};

soap.createClient(url, function(err, client) {
	client.getStudentEmail(args, function(err, result) {
		console.log(err, result);
	});
});