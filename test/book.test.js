const request = require('supertest');
const app = require('../app');
const client = require('../config/prisma-config');

afterAll(() => {
	client.$disconnect();
});

describe('Books endpoints', () => {
	describe('User workflow for books', () => {
		const newBook = { title: 'Something', cover: 'a cover' };
		it('1. User create a new Book ', async () => {
			const response = await request(app)
				.post('/book')
				.send(newBook)
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toBeDefined();
			expect(response.body.title).toBe(newBook.title);
			expect(response.body.cover).toBe(newBook.cover);
			newBook.id = response.body.id;
		});
		it('2. User retrieves a book ', async () => {
			const response = await request(app)
				.get('/book')
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toBeDefined();
			expect(response.body.length).toBe(1);
			expect(response.body[0].cover).toBe(newBook.cover);
			expect(response.body[0].title).toBe(newBook.title);
		});
		it('3. User update a book ', async () => {
			const updatedBook = { title: 'New title', cover: 'New cover' };
			const response = await request(app)
				.put(`/book/${newBook.id}`)
				.send(updatedBook)
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toBeDefined();
			expect(response.body.cover).toBe(updatedBook.cover);
			expect(response.body.title).toBe(updatedBook.title);
			newBook.title = response.body.title;
			newBook.cover = response.body.cover;
		});
		it('4. User delete a book ', async () => {
			const response = await request(app)
				.delete(`/book/${newBook.id}`)
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toBeDefined();
			expect(response.body.cover).toBe(newBook.cover);
			expect(response.body.title).toBe(newBook.title);
		});
		it('5. Book shouldnt be here anymore ', async () => {
			const response = await request(app)
				.get(`/book`)
				.expect(200)
				.expect('Content-Type', /json/);

			expect(response.body).toBeDefined();
			expect(response.body.length).toBe(0);
		});
	});
});
// describe
//  it
//  expect...
