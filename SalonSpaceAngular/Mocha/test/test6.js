var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Technician Detail result', function () {

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/technician/1")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with 1 object', function (){
		expect(response).to.have.status(200);
//        expect(response.body).to.be.an.object;
		expect(response).to.have.headers;
        expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.length.above(0)
					expect(body[i]).to.have.length.below(2);
				}
				return true;
			});
    });
    
	it('The elements in the object have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('skillList');
					expect(body[i]).to.have.property('ratingListID');
					expect(body[i]).to.have.property('salonListID');
					expect(body[i]).to.have.property('languageList');
					expect(body[i]).to.have.property('registeredUserID');
					expect(body[i]).to.have.property('technicianID');
					expect(body[i]).to.have.property('technicianID').that.is.a('number');
					expect(body[i]).to.have.property('name').that.is.a('string');
				}
				return true;
			});
	});	
	
});