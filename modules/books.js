export default class Bookshelf {
  #books;

  constructor() {
    this.#books = [];
  }

  // Setters
  SetBooks(books) {
    this.#books = books;
  }

  // Getter
  get Books() {
    return this.#books;
  }

  // Methods
  AddBook(title, author) {
    const id = `${new Date().getTime()}`;
    this.#books.push({
      title,
      author,
      id,
    });
  }

  DeleteBook(id) {
    const localBooks = this.#books;

    this.#books = localBooks.filter((books) => {
      if (books.id !== id) {
        return true;
      } 
      return false
    });
  }

  SaveBookshelfLocal() {
    localStorage.setItem('books', JSON.stringify(this.#books));
  }

  LoadBooksFromLocal() {
    const savedBooks = JSON.parse(localStorage.getItem('books'));

    if (Array.isArray(savedBooks)) {
      this.#books = savedBooks;
      return true;
    }
    return false;
  }
}
