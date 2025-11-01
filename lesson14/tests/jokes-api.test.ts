import { expect } from 'chai';
import JokesApi from '../api/jokes-api';
import { Joke } from '../types';

describe('Jokes API Tests', function() {
    let jokesApi: JokesApi;

    before(function() {
        jokesApi = new JokesApi();
    });

    it('should ping the server', async function() {
        const response = await jokesApi.ping();

        expect(response.status).to.equal(200);
        expect(response.data).to.equal('pong');
    });

    it('should get a random joke', async function() {
        const response = await jokesApi.getRandomJoke();

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('setup');
        expect(response.data).to.have.property('punchline');
        expect(response.data).to.have.property('type');
        expect(response.data.setup).to.not.be.empty;
        expect(response.data.punchline).to.not.be.empty;
    });

    it('should get ten jokes', async function() {
        const response = await jokesApi.getTenJokes();

        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('array');
        expect(response.data).to.have.lengthOf(10);

        // Check first joke has required properties
        expect(response.data[0]).to.have.property('id');
        expect(response.data[0]).to.have.property('setup');
        expect(response.data[0]).to.have.property('punchline');
    });

    it('should get joke types', async function() {
        const response = await jokesApi.getJokeTypes();

        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('array');

        if (response.data.length > 0) {
            expect(response.data[0]).to.be.a('string');
        }
    });

    it('should get a dad joke', async function() {
        const response = await jokesApi.getDadJoke();

        expect(response.status).to.equal(200);

        // Dad joke endpoint returns an array, so get the first joke
        const joke: Joke = Array.isArray(response.data) ? response.data[0] : response.data as Joke;

        expect(joke).to.have.property('setup');
        expect(joke).to.have.property('punchline');
        expect(joke).to.have.property('type');

        if (joke.type) {
            expect(joke.type).to.equal('dad');
        }
    });
});
