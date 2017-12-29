var mongoose = require('mongoose');
var User = require('../../models/user');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server');
var should = chai.should();

var testUser;

chai.use(chaiHttp);

//test first run emtpy User doc
describe('Test signup route', function() {
    beforeEach(function(done) {
        User.remove({}, function(err)  {
            if(err) throw new Error(err.message);

            done();
        });
    });

    /**
     * Test the POST / signup
     */
    describe('/POST Sigup', function() {
        beforeEach(function (done) {
            testUser = {
                firstName: 'test name',
                lastName: 'test LastName',
                username: 'user01',
                password: 'xyz',
                email: 'user01@domain.com'
            };

            done();
        });
        it('it should save a new user', function(done)  {
            chai.request(server).post('/api/signup/')
            .send(testUser)
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.message.should.contain('success');  
               
                done();
            });
        });
    });
});