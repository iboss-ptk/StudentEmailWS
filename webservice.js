var soap = require('soap')
var http = require('http')
var fs = require('fs')
var country = require('./country-iso.js');

function startService() {
	var studenEmailService = {
	  Email_Service: {
	    Email_Port: {
	      getStudentEmail: function(args, callback) {
	        country.iso_code(args.country, function (err, result) {
	        	var mail = args.name + "@" + args.univ + ".ac.";
	        	if (err) console.error(err);
	        	else {
	        		mail += result.CountryISOCodeResult.toLowerCase()
	        		console.log('request recived')
	        		return callback({'email': mail});
	        	}
	        });
	      }
	    }
	  }
	}

	var xml = fs.readFileSync('student_email_service.wsdl', 'utf8'),
	      server = http.createServer(function(request,response) {
	          response.end("404: Not Found: "+request.url)
	      });

	server.listen(8000);
	soap.listen(server, '/', studenEmailService, xml);
}

exports.startService = startService


