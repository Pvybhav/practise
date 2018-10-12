const request = require('supertest');
const { Genre } = require('../../models/genre');
const { User } = require('../../models/user');
let server;

describe('/api/genres', ()=>{
    beforeEach(()=>{
        server = require('../../index');
    });
    afterEach(async ()=>{
        server.close();
        await Genre.remove({});
    });

    describe('GET /', ()=>{
        it('should return all genres', async () =>{
            Genre.collection.insertMany([
                {
                    name: 'genre-1'
                },
                {
                    name: 'genre-2'
                }
        ]);
            const res = await request(server).get('/api/genres');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
            expect(res.body.some(g => g.name === 'genre-1')).toBeTruthy();
            expect(res.body.some(g => g.name === 'genre-2')).toBeTruthy();
        });
    });

    describe('GET /:id', async ()=>{
        it('should return a genre if valid id is passed', ()=>{
            const genre = new Genre({name: 'genre-1'})
            await genre.save();
            const res = await request(server).get('/api/genres/' + genre._id);
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('name', genre.name);
        });
        it('should return 404 if invalid id is passed', ()=>{
            const res = await request(server).get('/api/genres/1');
            expect(res.status).toBe(404);
        });
    });

    describe('POST /', async () =>{
        let name;
        let token;
        const exec = async () =>{
            const res = await request(server)
                .post('/api/genres')
                .set('x-auth-token', token)
                .send({ name });
        }
        beforeEach(()=>{
            token = new User().genreateAuthToken();
            name = 'genre1'            ;
        })

        it('should return 401 if client is not logged in'), () =>{
            token = '';
            const res = await exec();
            expect(res.status).toBe(401);
        }
        it('should return 400 if genre is less than 5 characters'), () =>{
            name = '1234'
            const res = await exec();
            expect(res.status).toBe(400);
        }
        it('should return 400 if genre is more than 50 characters'), () => {
            name = new Array(52).join('a');
            const res = exec();
            expect(res.status).toBe(400);
        }
        it('should save the genre if it is valid'), async () => {
            await exec();
            const genre = Genre.find({name: 'genre1'});
            expect(genre).not.toBeNull();
        }
        it('should return the genre if it is valid'), async () => {
            const res = await exec();
            expect(res.body).toHaveProperty('_id');
            expect(res.body).toHaveProperty('name', 'genre1');
        }
    });
    
})