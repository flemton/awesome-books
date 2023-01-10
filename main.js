const bookList = document.querySelector('.book-list');

const formTitle = document.querySelector('#title');

const formAuthor = document.querySelector('#author');
const addButton = document.querySelector('#add-book');

class BooksLibrary {
  constructor () {
    this.Books = JSON.parse(localStorage.getItem('Books')) || [];
  }

  addBook (formTitle, formAuthor) {
    this.Books.push({ title: formTitle.value, author: formAuthor.value })
    this.createBookList();
    localStorage.setItem('Books', JSON.stringify(BooksLibrary.Books));
  }

  createBookList () {
    bookList.innerHTML = '';
    
    for (let i = 0; i < this.Books.length; i++)
    {
      const book = `
      <div>
      <p>
      ${this.Books.title}
      </p>
      <p>
      ${this.Books.author}
      </p>
      <button class="remove" data=${i}>Remove</button>
      <hr>
      <div>
      `;
      this.bookList.appendChild(book);
    }
    this.removeBook();
  }

  removeBook() {
  [...document.querySelectorAll('.remove')].forEach((element) => {
    const index = parseInt(element.getAttribute('data'), 10);
        element.addEventListener('click', () => {
          this.Books.splice(index, 1);
          localStorage.setItem('Books', JSON.stringify(this.bookList));
          this.createBook();
        });
      });
    }

};

const myBooks = new BooksLibrary();

BooksLibrary.createBook();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  BooksLibrary.addBook(formTitle, formAuthor);
  localStorage.setItem('Books', JSON.stringify(BooksLibrary.bookList));
  formTitle.value = '';
  formAuthor.value = '';
});