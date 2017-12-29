var mongoose = require('mongoose');
var Post = require('../../models/post');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../server');
var should = chai.should();

chai.use(chaiHttp);

//first run test, empty db
describe('Test post route', function() {
    beforeEach(function(done) {
        Post.remove({}, function(err) {
            if(err) throw new Error(err.message);

            done();
        });
    });

    /**
     * Test the GET / fetchAll
     */
    describe('/GET Posts', function() {
        it('it should get all posts', function(done) {
            chai.request(server).get('/api/post/')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.payload.should.be.a('array');  
                res.body.payload.length.should.be.eql(0);
                
                done();
            });
        });
    });

    /**
     * Test the GET / fetch
     */
    describe('/GET/:id Post', function() {
        it('it should should get a post by id', function(done) {
            var post = {
                title: 'this is a test post',
                tags: [
                    {name:' i have a tag'},
                    {name:' i have another tag'}, 
                ],
                content: 'test basic content'
            }; 
            
            Post.create(post, function(err, doc) {
                if(err) throw new Error(err.message);

                chai.request(server)
                .get(`/api/post/${doc.id}`)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.payload.should.have.property('title');
                    res.body.payload.should.have.property('tags');
                    res.body.payload.should.have.property('content');
                    res.body.payload.tags.should.be.a('array');
                    res.body.payload.tags.length.should.eql(2);
                   
                    done();
                });
            });
        });
    });

    /**
     * Test the POST / create
     */
    describe('/POST Post', function() {
        it('it should should save a post', function(done){
            var post = {
                title: 'This is a post',
                tags: JSON.stringify(['tag 1', 'tag 2', 'tag 3']),
                content: 'Some text goes here'
            };
            chai.request(server)
            .post('/api/post')
            .send(post)
            .end(function(err, res) {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.message.should.be.a('string');
                res.body.message.should.contain('success');
                
                done();
            });
        });
    });

    /**
     * Test the PUT / update
     */

    describe('/PATCH/:id Post', function() {
        it('it should update a post by id', function(done) {
            let post = {
                title: 'this is a test post',
                tags: [
                    {name:' i have a tag'},
                    {name:' i have another tag'}, 
                ],
                content: 'test basic content'
            }; 

            let postUpdated = {
                title: post.title + ' UPDATE',
                tags:post.tags.concat({name: 'an update tag'}),
                content: post.content + ' UPDATE'
            };
            
            Post.create(post, function(err, doc) {
                if(err) throw new Error(err.message);

                chai.request(server)
                .patch(`/api/post/${doc._id}`)
                .send(postUpdated)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.payload.should.have.property('title').eql(postUpdated.title);
                    res.body.payload.should.have.property('tags');
                    res.body.payload.tags.should.be.a('array');
                    res.body.payload.tags.length.should.eql(3);
                    res.body.payload.should.have.property('content').eql(postUpdated.content);
                    
                    done();
                });
            });
        });  
    });

    /**
     * Test the DELETE / deleteOne
     */

    describe('/DELETE/:id Post', function() {
        it('it should delete a post by id', function(done) {
            var post = {
                title: 'this is a test post',
                tags: [
                    {name:' i have a tag'},
                    {name:' i have another tag'}, 
                ],
                content: 'test basic content'
            }; 

            Post.create(post, function(err, doc) {
                if(err) throw new Error(err.message);

                chai.request(server)
                .delete(`/api/post/${doc._id}`)
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.message.should.contain('success');
                    res.body.payload.should.have.property('ok').eql(1);
                    res.body.payload.should.have.property('n').eql(1);
                    
                    done();
                });
            });
        });  
    });
});