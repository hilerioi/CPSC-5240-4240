console.log('starting test');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

if (!global.Promise) {
  var q = require('q');
  chai.request.addPromises(q.Promise);
}

describe('Test To Do lists result', function () {
	this.timeout(15000);
	
	it('Should return three objects', function(done){
		chai.request('http://seattleumytodo.azurewebsites.net/')
		 .get('/app/lists')
		 .end(function (err, res) {
			expect(err).to.be.null;
			expect(res).to.have.status(200);
			expect(res.body).to.be.an.object;
			expect(res.body).to.have.length.above(3);
			expect(res.body[0]).to.include.keys('name');
			expect(res.body[0]).to.have.property('listId');
			expect(res.body[0]).to.have.deep.property('description').that.is.a('string');
			done();
		 });
	});
	
  });