const request = require('supertest')
const app = require('./app')

/* Here tests for each api requests are made using jest testing framework along with supertest */

describe('All APIs', () => {

    it('GET / --> string variables text and lang', () => {
        request(app).get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    it('POST /translate --> string variables translated and orilang', () => {
        request(app).post('/translate').expect('content-type', /json/).send({
            transalted: 'translated text', orilang: 'original text'
        })
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            })

    });

    it('PATCH /translate/:id --> string variable translang and number variable id', () => {
        request(app).post('/translate/:id').expect('content-type', /json/).send({
            translang: 'retranslated text', id: 'Id of original text'
        })
            .then((response) => {
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    it('* --> error 404', () => {
        request(app).post('*')
            .then((response) => {
                expect(response.statusCode).toBe(404);
                done();
            })
    });
})

