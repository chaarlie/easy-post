var mongoose = require('mongoose');
var User = require('../../models/user');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server');
var should = chai.should();

chai.use(chaiHttp);

describe('Test login route', function() {
    /**
     * Test the POST / login
     */
    describe('/POST validateCredentials', function() {
        var entry = {
            firstName: 'test name',
            lastName: 'test LastName',
            username: 'someotheruser01',
            password: 'xyz',
            email: 'someotheruser01@domain.com'
        };
        
        var testUser = new User(entry);
        User.create(testUser, function(err, newCreatedUser) {
          //  if(err) throw new Error(err.message);
          
            it('it should authenticate the new user', function(done)  {
                chai.request(server).post('/api/login/')
                .send(newCreatedUser)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.message.should.contain('success');  
            
                    done();
                });
            });
        
        });
    });
});