class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	findMany() {
		mysql.query('SELECT * FROM books');
	}
	create() {
		mysql.query(`INSERT INTO books (title, author) VALUES ?, ?`, [
			this.title,
			this.author,
		]);
	}
}
