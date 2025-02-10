//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let { expect } = chai;
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('POST /', () => {
    it ('should return a json with the accept header', (done) => {
        const sampleBody = { message: 'hello world' };

        chai
            .request(server)
            .post('/')
            .set('accept', 'application/json')
            .send(sampleBody)
            .end((err, response) => {
                expect(err).to.be.null;
                expect(response).to.have.status(200);
                expect(response).to.be.json;
                expect(response.body).to.have.property('message', 'hello world');
                done();
                });
        });
});